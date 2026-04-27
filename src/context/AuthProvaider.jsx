"use client";

import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useRouter } from "next/navigation";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  // useEffect(() => {
  //     async function loadLoginSession() {
  //         try {
  //             const response = await fetch("/api/me", {      //end point to get current user session
  //                 method: "GET",
  //                 headers: {
  //                     "Content-Type": "application/json",
  //                 },
  //                 credentials: "include",
  //             });

  //             if (response.ok) {
  //                 const data = await response.json();
  //                 setUser(data.user);
  //             } else {
  //                 setUser(null);
  //             }

  //         } catch (error) {
  //             console.error("Error fetching user:", error);
  //             setUser(null);
  //         } finally {
  //             setLoading(false);
  //         }
  //     }

  //     loadLoginSession();
  //     }, []);

  const refreshSession = useCallback(async () => {
    try {
      const response = await fetch("/api/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        setUser(null);
        return null;
      }

      const data = await response.json();
      setUser(data.user || null);
      return data.user || null;
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
      router.push("/dashboard");
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
    router.push("/login");
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
