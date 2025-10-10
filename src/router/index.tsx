import { createBrowserRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import HeroView from '@/pages/HeroView';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Forbidden from '@/pages/Forbidden';
import NotFound from '@/pages/NotFound';
import { GuardedRoute, authGuard, guestGuard } from './guard';

// Define your routes
export const routes: RouteObject[] = [
  // Public pages - redirect to dashboard if authenticated
  {
    path: '/',
    element: (
      <GuardedRoute guards={[guestGuard]}>
        <HeroView />
      </GuardedRoute>
    ),
  },
  // Protected route - requires authentication
  {
    path: '/dashboard',
    element: (
      <GuardedRoute guards={[authGuard]}>
        <Dashboard />
      </GuardedRoute>
    ),
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
