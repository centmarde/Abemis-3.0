import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserData {
  email: string;
  role: string;
  userId: string;
  token: string;
}

interface AuthState {
  isAuthenticated: boolean;
  userData: UserData;
  login: (email: string) => void;
  logout: () => void;
  updateUserData: (data: Partial<UserData>) => void;
}

// Generate random user data
const generateRandomUserData = (email: string): UserData => {
  const randomUserId = Math.random().toString(36).substring(2, 15);
  const randomToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  const roles = ['user', 'admin', 'moderator'];
  const randomRole = roles[Math.floor(Math.random() * roles.length)];
  
  return {
    email: email || 'random@example.com',
    role: randomRole,
    userId: randomUserId,
    token: randomToken,
  };
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userData: {
        email: '',
        role: '',
        userId: '',
        token: '',
      },
      login: (email: string) => {
        const randomUserData = generateRandomUserData(email);
        set({
          isAuthenticated: true,
          userData: randomUserData,
        });
      },
      logout: () => {
        set({
          isAuthenticated: false,
          userData: {
            email: '',
            role: '',
            userId: '',
            token: '',
          },
        });
        // Explicitly remove the persisted data from localStorage
        localStorage.removeItem('auth-storage');
      },
      updateUserData: (data: Partial<UserData>) => {
        set((state) => ({
          userData: {
            ...state.userData,
            ...data,
          },
        }));
      },
    }),
    {
      name: 'auth-storage', // name of the item in localStorage
      storage: createJSONStorage(() => localStorage), // use localStorage for persistence
    }
  )
);
