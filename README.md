# Dynamic Page Generator API

Create pages with single or multiple components using POST requests.

## API Endpoint

**POST** `/api/pages`

**Headers**: `Content-Type: application/json`

**Body Structure**:
```json
{
  "slug": "unique-page-name",
  "title": "Page Title",
  "description": "Page description",
  "components": [
    {
      "type": "ComponentType",
      "props": { /* component properties */ }
    }
  ]
}
```

## Single Component Examples

### Text Section

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "text-example",
    "title": "Text Page",
    "description": "Simple text content",
    "components": [
      {
        "type": "TextSection",
        "props": {
          "heading": "Welcome",
          "content": "This is a text section.",
          "alignment": "center"
        }
      }
    ]
  }'
```

**Postman:**
- Method: `POST`
- URL: `http://localhost:3000/api/pages`
- Headers: `Content-Type: application/json`
- Body (raw JSON):
```json
{
  "slug": "text-example",
  "title": "Text Page",
  "description": "Simple text content",
  "components": [
    {
      "type": "TextSection",
      "props": {
        "heading": "Welcome",
        "content": "This is a text section.",
        "alignment": "center"
      }
    }
  ]
}
```

### Image Block

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "image-example",
    "title": "Image Page",
    "description": "Image showcase",
    "components": [
      {
        "type": "ImageBlock",
        "props": {
          "src": "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=400",
          "alt": "Example image",
          "width": 800,
          "height": 400,
          "caption": "Image caption"
        }
      }
    ]
  }'
```

**Postman Body:**
```json
{
  "slug": "image-example",
  "title": "Image Page",
  "description": "Image showcase",
  "components": [
    {
      "type": "ImageBlock",
      "props": {
        "src": "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=800&h=400",
        "alt": "Example image",
        "width": 800,
        "height": 400,
        "caption": "Image caption"
      }
    }
  ]
}
```

### Stats Box

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "stats-example",
    "title": "Stats Page",
    "description": "Statistics display",
    "components": [
      {
        "type": "StatsBox",
        "props": {
          "stats": [
            {
              "label": "Users",
              "value": "1000+",
              "icon": "users",
              "change": "+20%",
              "description": "Active users"
            }
          ]
        }
      }
    ]
  }'
```

**Postman Body:**
```json
{
  "slug": "stats-example",
  "title": "Stats Page",
  "description": "Statistics display",
  "components": [
    {
      "type": "StatsBox",
      "props": {
        "stats": [
          {
            "label": "Users",
            "value": "1000+",
            "icon": "users",
            "change": "+20%",
            "description": "Active users"
          }
        ]
      }
    }
  ]
}
```

### Card

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "card-example",
    "title": "Card Page",
    "description": "Card component",
    "components": [
      {
        "type": "Card",
        "props": {
          "title": "Feature Title",
          "content": "Feature description goes here.",
          "variant": "default"
        }
      }
    ]
  }'
```

**Postman Body:**
```json
{
  "slug": "card-example",
  "title": "Card Page",
  "description": "Card component",
  "components": [
    {
      "type": "Card",
      "props": {
        "title": "Feature Title",
        "content": "Feature description goes here.",
        "variant": "default"
      }
    }
  ]
}
```

### Call to Action

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "cta-example",
    "title": "CTA Page",
    "description": "Call to action",
    "components": [
      {
        "type": "CTA",
        "props": {
          "text": "Click Here",
          "href": "https://example.com",
          "variant": "primary",
          "size": "large"
        }
      }
    ]
  }'
```

**Postman Body:**
```json
{
  "slug": "cta-example",
  "title": "CTA Page",
  "description": "Call to action",
  "components": [
    {
      "type": "CTA",
      "props": {
        "text": "Click Here",
        "href": "https://example.com",
        "variant": "primary",
        "size": "large"
      }
    }
  ]
}
```

## Multiple Components Example

**Curl:**
```bash
curl -X POST http://localhost:3000/api/pages \
  -H "Content-Type: application/json" \
  -d '{
    "slug": "multi-example",
    "title": "Multi Component Page",
    "description": "Page with multiple components",
    "components": [
      {
        "type": "TextSection",
        "props": {
          "heading": "Main Title",
          "content": "Introduction text",
          "alignment": "center"
        }
      },
      {
        "type": "Card",
        "props": {
          "title": "Feature 1",
          "content": "First feature description",
          "variant": "outlined"
        }
      },
      {
        "type": "StatsBox",
        "props": {
          "stats": [
            {
              "label": "Metric 1",
              "value": "100%",
              "icon": "trending"
            },
            {
              "label": "Metric 2", 
              "value": "50+",
              "icon": "users"
            }
          ]
        }
      },
      {
        "type": "CTA",
        "props": {
          "text": "Get Started",
          "href": "https://example.com",
          "variant": "primary"
        }
      }
    ]
  }'
```

**Postman Body:**
```json
{
  "slug": "multi-example",
  "title": "Multi Component Page",
  "description": "Page with multiple components",
  "components": [
    {
      "type": "TextSection",
      "props": {
        "heading": "Main Title",
        "content": "Introduction text",
        "alignment": "center"
      }
    },
    {
      "type": "Card",
      "props": {
        "title": "Feature 1",
        "content": "First feature description",
        "variant": "outlined"
      }
    },
    {
      "type": "StatsBox",
      "props": {
        "stats": [
          {
            "label": "Metric 1",
            "value": "100%",
            "icon": "trending"
          },
          {
            "label": "Metric 2", 
            "value": "50+",
            "icon": "users"
          }
        ]
      }
    },
    {
      "type": "CTA",
      "props": {
        "text": "Get Started",
        "href": "https://example.com",
        "variant": "primary"
      }
    }
  ]
}
```

## Component Types

**Card**: `title`, `content`, `variant` (default|outlined|elevated)

**ImageBlock**: `src`, `alt`, `width`, `height`, `caption`

**TextSection**: `heading`, `content`, `alignment` (left|center|right)

**StatsBox**: `stats` array with `label`, `value`, `icon`, `change`, `description`

**CTA**: `text`, `href`, `variant` (primary|secondary|outline), `size` (small|medium|large)