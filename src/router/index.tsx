import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HeroView from '@/pages/HeroView';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ForgotPass from '@/pages/ForgotPass';
import Forbidden from '@/pages/Forbidden';
import NotFound from '@/pages/NotFound';
import OuterLayout from '@/layouts/OuterLayout';
import InnerLayout from '@/layouts/InnerLayout';
import { GuardedRoute, authGuard, guestGuard } from './guard';

// Define your routes
export const routes: RouteObject[] = [
  // Public pages with Navbar and Footer layout
  {
    path: '/',
    element: <OuterLayout />,
    children: [
      {
        index: true,
        element: (
          <GuardedRoute guards={[guestGuard]}>
            <HeroView />
          </GuardedRoute>
        ),
      },
    ],
  },
  // Protected routes with Sidebar layout - requires authentication
  {
    path: '/',
    element: (
      <GuardedRoute guards={[authGuard]}>
        <InnerLayout />
      </GuardedRoute>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
  // Guest-only route - redirects authenticated users
  {
    path: '/login',
    element: (
      <GuardedRoute guards={[guestGuard]}>
        <Login />
      </GuardedRoute>
    ),
  },
  {
    path: '/register',
    element: (
      <GuardedRoute guards={[guestGuard]}>
        <Register />
      </GuardedRoute>
    ),
  },
  {
    path: '/forgot-password',
    element: (
      <GuardedRoute guards={[guestGuard]}>
        <ForgotPass />
      </GuardedRoute>
    ),
  },
  // Error pages
  {
    path: '/forbidden',
    element: <Forbidden />,
  },
  {
    path: '/unauthorized',
    element: <Forbidden />,
  },
  // 404 - catch all route (must be last)
  {
    path: '*',
    element: <NotFound />,
  },
];

// Create and export the router
export const router = createBrowserRouter(routes);
