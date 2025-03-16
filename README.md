# Campspot

A modern cabin booking and management platform built with React. This full-featured application showcases my frontend development skills with a focus on responsive design, state management, and API integration.

![Campspot Screenshot](https://via.placeholder.com/800x400?text=Campspot+Screenshot)

## 🔗 Live Demo & Links

- **Live Demo**: [campspot.yourdomain.com](https://campspot.yourdomain.com)
- **GitHub**: [github.com/yourusername/campspot](https://github.com/yourusername/campspot)

## 🌟 Key Features

- **Interactive Dashboard**: Real-time statistics with dynamic charts and data visualization
- **Responsive Booking System**: Mobile-friendly interface for managing reservations
- **Cabin Management**: CRUD operations with image uploads and real-time updates
- **User Authentication**: Secure role-based access control system
- **Dark/Light Mode**: Fully implemented theme switching with styled-components
- **Form Validation**: Comprehensive client-side validation with React Hook Form

## 💻 Technical Highlights

- Built a **component library** of 20+ reusable UI components
- Implemented **optimistic UI updates** for a smoother user experience
- Used **React Query** for efficient server-state management and caching
- Created custom hooks for **authentication**, **form handling**, and **API calls**
- Designed a **responsive layout** that works seamlessly on mobile, tablet, and desktop
- Integrated with **Supabase** for backend services and real-time data

## 🚀 Tech Stack

- **Frontend**: React 18, React Router v6
- **State Management**: React Query (TanStack Query)
- **Styling**: Styled Components with custom theming
- **Backend**: Supabase (Authentication, Database, Storage)
- **Build Tool**: Vite for fast development and optimized production builds
- **Form Handling**: React Hook Form with Zod validation
- **Notifications**: React Hot Toast for user feedback
- **UI Components**: Custom components with React Icons and Lucide React
- **Date Handling**: date-fns for comprehensive date operations

## 🧠 What I Learned

- Advanced state management patterns with React Query
- Building a scalable component architecture
- Implementing authentication flows with Supabase
- Creating responsive designs with styled-components
- Optimizing React performance with memoization and code splitting

## 📋 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/boildeg/campspot.git
   cd campspot
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with your Supabase credentials:

   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── assets/       # Static assets like images
├── data/         # Sample data and data utilities
├── features/     # Feature-based components and logic
├── hooks/        # Custom React hooks
├── pages/        # Page components
├── services/     # API and external service integrations
├── styles/       # Global styles and theme
├── ui/           # Reusable UI components
├── utils/        # Utility functions
├── App.jsx       # Main application component
└── main.jsx      # Application entry point
```

## 📱 Responsive Design

The application is fully responsive with breakpoints at:

- Mobile: 480px
- Tablet: 768px
- Desktop: 1024px+

## 🚢 Deployment

Build the application for production:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.io/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Styled Components](https://styled-components.com/)
