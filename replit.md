# Overview

EXPONENT is a professional real estate consulting website built as a full-stack web application. The project serves as a corporate website for a real estate consulting company, featuring services information, company details, contact forms, and partner applications. It's designed to showcase the company's expertise while providing functional contact and partnership application capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React 18** with TypeScript for type safety and modern component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling and validation
- **shadcn/ui** component library built on top of Radix UI primitives for consistent UI components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theming support with light/dark mode capability

## Backend Architecture
- **Express.js** server with TypeScript for the REST API
- **In-memory storage** using Map collections for data persistence (development/demo setup)
- **Zod schemas** for request validation and type inference
- **Custom middleware** for request logging and error handling
- RESTful API endpoints for contact forms and partner applications
- **SendGrid email integration** for transactional emails:
  - Contact form submissions trigger automated emails
  - Admin notification sent to info@centrostudiimmobiliari.it
  - Client confirmation email sent from info@webproitalia.com
  - Error handling ensures email delivery failures are surfaced to users

## Database Schema Design
- **Drizzle ORM** configured for PostgreSQL with type-safe database operations
- **Contact Requests Table**: Stores customer inquiries with fields for personal info, service type, and messages
- **Partner Applications Table**: Manages partnership applications with experience and motivation details
- **UUID primary keys** with automatic timestamp tracking
- Schema defined with Drizzle's column types and validation constraints

## Styling and Design System
- **Montserrat font** for headings and branding elements
- **Open Sans font** for body text and readability
- **Custom CSS properties** for consistent color theming
- **Responsive design** with mobile-first approach using Tailwind breakpoints
- **Component variants** using class-variance-authority for consistent styling patterns

## Development Workflow
- **TypeScript** throughout the stack for type safety
- **ESM modules** with modern import/export syntax
- **Hot module replacement** in development for fast iteration
- **Path aliases** for clean import statements (@/, @shared/, etc.)
- **Shared schema types** between frontend and backend for consistency

# External Dependencies

## UI and Styling
- **Radix UI** primitives for accessible, unstyled UI components
- **Tailwind CSS** for utility-first styling framework
- **Lucide React** for consistent icon library
- **class-variance-authority** and **clsx** for conditional styling
- **tailwind-merge** for efficient class merging

## Forms and Validation
- **React Hook Form** for performant form state management
- **Zod** for schema validation and TypeScript type inference
- **@hookform/resolvers** for integrating Zod with React Hook Form

## Database and ORM
- **Drizzle ORM** for type-safe database operations
- **@neondatabase/serverless** for PostgreSQL database connection
- **drizzle-kit** for database migrations and schema management

## State Management and Data Fetching
- **TanStack React Query** for server state management and caching
- **Wouter** for lightweight client-side routing

## Email Services
- **@sendgrid/mail** for transactional email delivery
  - API key stored securely in Replit Secrets (SENDGRID_API_KEY)
  - Verified sender: info@webproitalia.com
  - Email templates with HTML formatting for professional appearance

## Development Tools
- **Vite** for fast development server and building
- **TypeScript** for static type checking
- **ESBuild** for fast JavaScript bundling in production
- **PostCSS** with Autoprefixer for CSS processing