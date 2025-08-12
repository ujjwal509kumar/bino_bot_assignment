import { NextResponse } from 'next/server';
import { loadPage, updatePage, deletePage } from '@/lib/pageStorage';
import { validatePageRequest } from '@/lib/validation';

// GET a specific page
export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const page = await loadPage(slug);

    if (!page) {
      return NextResponse.json(
        {
          success: false,
          error: 'PAGE_NOT_FOUND',
          message: `Page with slug '${slug}' not found`
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        id: page.id,
        slug: page.slug,
        title: page.title,
        description: page.description,
        components: page.components,
        createdAt: page.createdAt,
        updatedAt: page.updatedAt
      }
    });
  } catch (error) {
    console.error('Error fetching page:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'STORAGE_ERROR',
        message: 'Failed to fetch page'
      },
      { status: 500 }
    );
  }
}

// PUT to update a page
export async function PUT(request, { params }) {
  try {
    const { slug } = await params;
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

    const { title, description, components } = body;

    // Process components with IDs
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

    // Update the page
    const updatedPage = await updatePage(slug, pageData);

    return NextResponse.json({
      success: true,
      message: 'Page updated successfully',
      data: {
        id: updatedPage.id,
        slug: updatedPage.slug,
        title: updatedPage.title,
        componentsCount: processedComponents.length,
        updatedAt: updatedPage.updatedAt
      }
    });

  } catch (error) {
    console.error('Error updating page:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'STORAGE_ERROR',
        message: 'Failed to update page'
      },
      { status: 500 }
    );
  }
}

// DELETE a page
export async function DELETE(request, { params }) {
  try {
    const { slug } = await params;

    // Check if page exists
    const page = await loadPage(slug);
    if (!page) {
      return NextResponse.json(
        {
          success: false,
          error: 'PAGE_NOT_FOUND',
          message: `Page with slug '${slug}' not found`
        },
        { status: 404 }
      );
    }

    // Delete the page
    await deletePage(slug);

    return NextResponse.json({
      success: true,
      message: 'Page deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting page:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'STORAGE_ERROR',
        message: 'Failed to delete page'
      },
      { status: 500 }
    );
  }
}