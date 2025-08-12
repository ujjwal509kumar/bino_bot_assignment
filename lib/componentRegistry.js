// Import all our reusable components
import Card from '@/components/Card';
import ImageBlock from '@/components/ImageBlock';
import TextSection from '@/components/TextSection';
import StatsBox from '@/components/StatsBox';
import CTA from '@/components/CTA';

// Component registry mapping
export const COMPONENT_REGISTRY = {
  'Card': Card,
  'ImageBlock': ImageBlock,
  'TextSection': TextSection,
  'StatsBox': StatsBox,
  'CTA': CTA
};

// Get component by type
export function getComponent(type) {
  return COMPONENT_REGISTRY[type];
}

// Check if component type is valid
export function isValidComponentType(type) {
  return type in COMPONENT_REGISTRY;
}

// Get all available component types
export function getAvailableComponents() {
  return Object.keys(COMPONENT_REGISTRY);
}

// Validate component props (basic validation)
export function validateComponentProps(type, props) {
  const component = getComponent(type);
  if (!component) {
    throw new Error(`Invalid component type: ${type}`);
  }
  
  // Basic validation - can be extended with more specific rules
  if (!props || typeof props !== 'object') {
    throw new Error(`Invalid props for component ${type}`);
  }
  
  return true;
}