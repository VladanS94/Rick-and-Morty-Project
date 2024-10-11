import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { Navigate } from "react-router-dom";
import { paths } from "./Routes";
import { ProtectedRouteProps } from "../types/type";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authTocenLocal = localStorage.getItem("authToken");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authTocenLocal) {
    return <Navigate to={paths.login} />;
  }
  return <>{children};</>;
};

export default ProtectedRoute;
