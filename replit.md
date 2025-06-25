# Replit.md - Yann Morin Freelance Website

## Overview

This is a professional showcase website for Yann Morin, a freelance web developer operating through a SASU in Montpellier, France. The site serves as a commercial platform to sell website creation services to local merchants, artisans, and independent professionals. The application is built with a modern full-stack architecture using React for the frontend and Express.js for the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API design
- **Validation**: Zod schemas for request validation
- **Development**: tsx for TypeScript execution in development

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schema definitions
- **Storage**: In-memory storage for development, PostgreSQL for production
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Contact Management System
- Contact request form with comprehensive validation
- Data persistence with creation timestamps
- Admin interface capabilities for request management
- Email integration ready (currently logging to console)

### Service Presentation
- Two-tier pricing structure (Pack BASIC and Pack PRO)
- Portfolio showcase with project examples
- Trust-building elements emphasizing local presence and transparency
- Mobile-responsive design for all devices

### UI Component System
- Complete shadcn/ui component library implementation
- Consistent design system with CSS custom properties
- Dark mode support (configured but not actively used)
- Accessible components following WAI-ARIA guidelines

## Data Flow

1. **User Interaction**: Visitors navigate the single-page application and interact with the contact form
2. **Form Submission**: React Hook Form validates data using Zod schemas before submission
3. **API Processing**: Express.js backend validates and processes contact requests
4. **Data Storage**: Contact requests are stored with metadata (timestamps, processing status)
5. **Response Handling**: Client receives feedback and displays success/error messages via toast notifications

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Query)
- Radix UI primitives for accessible components
- Form libraries (React Hook Form, Hookform Resolvers)
- Utility libraries (clsx, class-variance-authority, date-fns)

### Backend Dependencies
- Express.js with TypeScript support
- Drizzle ORM with Neon Database serverless connector
- Development tools (tsx, esbuild for production builds)

### Development Tools
- Vite with React plugin and runtime error overlay
- Replit-specific plugins for development environment
- TypeScript compiler with strict mode enabled
- PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- Runs on port 5000 with hot module replacement
- Uses in-memory storage for contact requests
- Vite dev server with middleware mode for API integration

### Production Build
- Frontend: Vite builds static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Single deployment artifact with static file serving

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database configured)
- Environment variable: `DATABASE_URL` for database connection
- Static file serving capability for frontend assets

### Replit Configuration
- Automated deployment with autoscale target
- PostgreSQL 16 module for database support
- Port mapping: internal 5000 to external 80
- Parallel workflow execution for development

## Changelog

```
Changelog:
- June 24, 2025. Initial setup
- June 24, 2025. Updated to modern pastel theme with floating bubbles
- June 24, 2025. Improved hero section mobile responsiveness and fixed navbar overlap
- June 25, 2025. Complete design overhaul with modern dark theme and glass morphism
- June 25, 2025. Added comprehensive animations and interactive particle effects
- June 25, 2025. Redesigned all sections with professional artistic touch
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```