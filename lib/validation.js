import { isValidComponentType } from './componentRegistry';

// Validate page creation request
export function validatePageRequest(data) {
  const errors = [];
  
  // Check required fields
  if (!data.slug || typeof data.slug !== 'string') {
    errors.push('Slug is required and must be a string');
  }
  
  if (!data.title || typeof data.title !== 'string') {
    errors.push('Title is required and must be a string');
  }
  
  if (!data.description || typeof data.description !== 'string') {
    errors.push('Description is required and must be a string');
  }
  
  if (!Array.isArray(data.components)) {
    errors.push('Components must be an array');
  } else {
    // Validate each component
    data.components.forEach((component, index) => {
      if (!component.type || typeof component.type !== 'string') {
        errors.push(`Component ${index}: type is required and must be a string`);
      } else if (!isValidComponentType(component.type)) {
        errors.push(`Component ${index}: invalid component type "${component.type}"`);
      }
      
      if (!component.props || typeof component.props !== 'object') {
        errors.push(`Component ${index}: props is required and must be an object`);
      }
    });
  }
  
  // Validate slug format (alphanumeric, hyphens, underscores only)
  if (data.slug && !/^[a-zA-Z0-9-_]+$/.test(data.slug)) {
    errors.push('Slug can only contain letters, numbers, hyphens, and underscores');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// Validate individual component data
export function validateComponent(componentData) {
  const errors = [];
  
  if (!componentData.type || typeof componentData.type !== 'string') {
    errors.push('Component type is required and must be a string');
  } else if (!isValidComponentType(componentData.type)) {
    errors.push(`Invalid component type: ${componentData.type}`);
  }
  
  if (!componentData.props || typeof componentData.props !== 'object') {
    errors.push('Component props is required and must be an object');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}