# Numeris Institute of Technology (NIT) - Learning Management System

A high-end, modern UI/UX for Numeris Institute of Technology's Learning Management System built with Next.js 14, Tailwind CSS, and Shadcn/UI. Features an industrial minimalist design inspired by Linear, Vercel, and Codecademy.

## Features

- **Three Route Groups:**
  - `(marketing)` - Landing page with bento-box feature grid
  - `(admin)` - Admin dashboard with collapsible sidebar
  - `(student)` - Student workstation with split-pane IDE

- **Design System:**
  - Industrial minimalist aesthetic
  - Deep Indigo (#4F46E5) and Pitch Black color palette
  - Glassmorphism effects
  - Dark mode support
  - Fully responsive design

- **Student Workstation:**
  - Horizontal resizable split-pane
  - Monaco Editor integration
  - Dark-themed terminal
  - Breadcrumb navigation
  - Running animation states

- **Components:**
  - Shadcn/UI components (Button, Card, Dialog, Tabs, Sidebar, Skeleton)
  - Custom SplitPane component
  - Course cards with hover effects
  - Empty states
  - Skeleton loaders

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Subdomain Routing

For local development with subdomain routing:

1. Add to your `hosts` file (Windows: `C:\Windows\System32\drivers\etc\hosts`):
```
127.0.0.1 student.localhost
```

2. Access the student portal at: `http://student.localhost:3000`

## Project Structure

```
app/
├── (marketing)/          # Marketing landing page
├── (admin)/              # Admin dashboard
├── (student)/            # Student portal
├── globals.css           # Global styles and theme
└── layout.tsx            # Root layout

components/
├── ui/                   # Shadcn UI components
├── layout/               # Layout components
├── course/               # Course-related components
├── lesson/               # Lesson components
└── empty-states/         # Empty state components

lib/
├── utils.ts              # Utility functions
└── subdomain.ts          # Subdomain detection
```

## Fonts

The project uses:
- **Geist Sans** (or Inter) for body text
- **JetBrains Mono** for code elements

Font files should be placed in `public/fonts/` directory. If fonts are not available, the system will fall back to Inter and system monospace fonts.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **Monaco Editor** - Code editor
- **Lucide React** - Icons
- **React Resizable Panels** - Split pane functionality

## License

MIT
