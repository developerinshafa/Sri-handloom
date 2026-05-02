"use client";

import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

    const refreshSession = useCallback(async () => {
    try {
      const response = await fetch(`/api/me`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!response.ok) {
        setUser(null);
        return null;
      }

      const data = await response.json();
      setUser(data.user);
      return data.user;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  useEffect(() => {
    (async () => {
      await refreshSession();
      setLoading(false);
    })();
  }, [refreshSession]);

  //login function to set user data and redirect to dashboard
  const login = async () => {
    const me = await refreshSession();
      if (me) {
      if (me.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    }
  };

  //logout function to clear user data and redirect to login page
  const logout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (error) {
      console.error("Error during logout:", error);
    }
    setUser(null);
    router.push("/");
  };

  const value = {
    user,
    loading,
    setUser,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
