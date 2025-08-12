import { NextResponse } from 'next/server';
import { pageExists } from '@/lib/pageStorage';

export async function POST(request) {
  try {
    const { slug } = await request.json();
    
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json(
        {
          success: false,
          error: 'INVALID_SLUG',
          message: 'Slug is required and must be a string'
        },
        { status: 400 }
      );
    }

    // Validate slug format
    if (!/^[a-zA-Z0-9-_]+$/.test(slug)) {
      return NextResponse.json(
        {
          success: false,
          available: false,
          error: 'INVALID_FORMAT',
          message: 'Slug can only contain letters, numbers, hyphens, and underscores'
        },
        { status: 400 }
      );
    }

    // Check if slug exists
    const exists = await pageExists(slug);
    
    return NextResponse.json({
      success: true,
      available: !exists,
      slug,
      message: exists 
        ? `Slug '${slug}' is already taken. Please choose a different one.`
        : `Slug '${slug}' is available!`
    });

  } catch (error) {
    console.error('Error checking slug:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'SERVER_ERROR',
        message: 'Failed to check slug availability'
      },
      { status: 500 }
    );
  }
}