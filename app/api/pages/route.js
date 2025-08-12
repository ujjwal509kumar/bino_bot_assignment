import { NextResponse } from 'next/server';
import { savePage, pageExists, listPages } from '@/lib/pageStorage';
import { validatePageRequest } from '@/lib/validation';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate the request data
    const validation = validatePageRequest(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'VALIDATION_ERROR',
          message: 'Invalid request data',
          details: validation.errors
        },
        { status: 400 }
      );
    }

    const { slug, title, description, components } = body;

    // Check if page already exists
    if (await pageExists(slug)) {
      return NextResponse.json(
        {
          success: false,
          error: 'SLUG_EXISTS',
          message: `Slug '${slug}' is already taken. Please choose a different slug.`,
          suggestion: `Try: ${slug}-2, ${slug}-new, or ${slug}-${Date.now().toString().slice(-4)}`
        },
        { status: 409 }
      );
    }

    // Create page data with component IDs
    const processedComponents = components.map((component, index) => ({
      id: `${slug}-${component.type}-${index}`,
      type: component.type,
      props: component.props
    }));

    const pageData = {
      title,
      description,
      components: processedComponents
    };

    // Save the page to database
    const savedPage = await savePage(slug, pageData);

    return NextResponse.json(
      {
        success: true,
        url: `/${slug}`,
        message: 'Page created successfully',
        data: {
          id: savedPage.id,
          slug: savedPage.slug,
          title: savedPage.title,
          componentsCount: processedComponents.length,
          createdAt: savedPage.createdAt
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating page:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'STORAGE_ERROR',
        message: 'Failed to create page',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// GET endpoint to list all pages
export async function GET() {
  try {
    const pages = await listPages();
    
    return NextResponse.json({
      success: true,
      pages: pages.map(page => ({
        slug: page.slug,
        title: page.title,
        description: page.description,
        url: `/${page.slug}`,
        createdAt: page.createdAt
      }))
    });
  } catch (error) {
    console.error('Error listing pages:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'STORAGE_ERROR',
        message: 'Failed to list pages'
      },
      { status: 500 }
    );
  }
}