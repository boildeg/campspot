# The Campspot

A comprehensive hotel management application built with React, Vite, and Supabase.

![The Ccampspot](https://via.placeholder.com/800x400?text=The+campspot)

## 🌟 Features

- **Dashboard**: Real-time statistics and insights about hotel operations
- **Booking Management**: View, create, and manage guest bookings
- **Cabin Management**: Manage cabin inventory, pricing, and availability
- **User Management**: Handle staff accounts and permissions
- **Settings**: Configure application settings
- **Authentication**: Secure login system for staff members

## 🚀 Tech Stack

- **Frontend**: React 18, React Router v6
- **State Management**: React Query (TanStack Query)
- **Styling**: Styled Components
- **Backend**: Supabase (Authentication, Database)
- **Build Tool**: Vite
- **Form Handling**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: React Icons, Lucide React
- **Date Handling**: date-fns

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

## 🔧 Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/campspot.git
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
