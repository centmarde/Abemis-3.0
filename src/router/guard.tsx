import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

// Define guard types
export type GuardCondition = () => boolean | Promise<boolean>;
export type GuardRedirect = string | (() => string);

export interface RouteGuardConfig {
  condition: GuardCondition;
  redirectTo: GuardRedirect;
  onGuardFail?: () => void;
}

// Authentication guard example
export const isAuthenticated = (): boolean => {
  // Check if user is authenticated using Zustand store
  const { isAuthenticated } = useAuthStore.getState();
  return isAuthenticated;
};

// Role-based guard example
export const hasRole = (requiredRole: string): boolean => {
  const { userData } = useAuthStore.getState();
  return userData.role === requiredRole;
};

// Custom guard component
interface GuardedRouteProps {
  children: ReactNode;
  guards?: RouteGuardConfig[];
}

export const GuardedRoute = ({ children, guards = [] }: GuardedRouteProps) => {
  const location = useLocation();

  // Check all guards
  for (const guard of guards) {
    const canAccess = guard.condition();
    
    if (!canAccess) {
      // Execute callback if guard fails
      if (guard.onGuardFail) {
        guard.onGuardFail();
      }

      // Get redirect path
      const redirectPath = typeof guard.redirectTo === 'function' 
        ? guard.redirectTo() 
        : guard.redirectTo;

      // Redirect to specified path
      return <Navigate to={redirectPath} state={{ from: location }} replace />;
    }
  }

  // All guards passed, render children
  return <>{children}</>;
};

// Common guard configurations
export const authGuard: RouteGuardConfig = {
  condition: isAuthenticated,
  redirectTo: '/login',
  onGuardFail: () => {
    console.warn('User not authenticated. Redirecting to login...');
  }
};

export const guestGuard: RouteGuardConfig = {
  condition: () => !isAuthenticated(),
  redirectTo: '/dashboard',
  onGuardFail: () => {
    console.warn('User already authenticated. Redirecting to dashboard...');
  }
};

export const adminGuard: RouteGuardConfig = {
  condition: () => hasRole('admin'),
  redirectTo: '/unauthorized',
  onGuardFail: () => {
    console.warn('Admin access required. Redirecting...');
  }
};
