import { prisma } from './prisma';

// Save a page configuration
export async function savePage(slug, pageData) {
  try {
    const page = await prisma.page.create({
      data: {
        slug,
        title: pageData.title,
        description: pageData.description,
        components: pageData.components,
      },
    });
    return page;
  } catch (error) {
    throw new Error(`Failed to save page: ${error.message}`);
  }
}

// Load a page configuration
export async function loadPage(slug) {
  try {
    const page = await prisma.page.findUnique({
      where: { slug },
    });
    return page;
  } catch (error) {
    throw new Error(`Failed to load page: ${error.message}`);
  }
}

// Check if a page exists
export async function pageExists(slug) {
  try {
    const page = await prisma.page.findUnique({
      where: { slug },
      select: { id: true },
    });
    return !!page;
  } catch (error) {
    return false;
  }
}

// List all pages
export async function listPages() {
  try {
    const pages = await prisma.page.findMany({
      select: {
        slug: true,
        title: true,
        description: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return pages;
  } catch (error) {
    throw new Error(`Failed to list pages: ${error.message}`);
  }
}

// Update a page configuration
export async function updatePage(slug, pageData) {
  try {
    const page = await prisma.page.update({
      where: { slug },
      data: {
        title: pageData.title,
        description: pageData.description,
        components: pageData.components,
      },
    });
    return page;
  } catch (error) {
    throw new Error(`Failed to update page: ${error.message}`);
  }
}

// Delete a page
export async function deletePage(slug) {
  try {
    await prisma.page.delete({
      where: { slug },
    });
    return true;
  } catch (error) {
    throw new Error(`Failed to delete page: ${error.message}`);
  }
}