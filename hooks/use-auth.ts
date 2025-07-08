import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface User {
  id: string;
  email: string;
  plan: "free" | "pro" | "enterprise";
  role: "user" | "admin";
  created_at: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  isProUser: boolean;
  isAdmin: boolean;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      // This would integrate with Supabase auth
      const token = localStorage.getItem("auth_token");
      if (token) {
        // Validate token and get user data
        const userData = await validateToken(token);
        setUser(userData);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("auth_token");
    } finally {
      setLoading(false);
    }
  };

  const validateToken = async (token: string): Promise<User> => {
    // Mock implementation - replace with actual Supabase call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1",
          email: "user@saintsal.com",
          plan: "pro",
          role: "user",
          created_at: new Date().toISOString(),
        });
      }, 1000);
    });
  };

  const isProUser = user?.plan === "pro" || user?.plan === "enterprise";
  const isAdmin = user?.role === "admin";

  return {
    user,
    loading,
    isProUser,
    isAdmin,
  };
}

// Auth functions
export const signIn = async (email: string, password: string) => {
  // Implement Supabase sign in
  console.log("Signing in:", email);
};

export const signUp = async (email: string, password: string) => {
  // Implement Supabase sign up
  console.log("Signing up:", email);
};

export const signOut = async () => {
  localStorage.removeItem("auth_token");
  window.location.href = "/";
};
