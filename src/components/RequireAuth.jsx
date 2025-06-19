// src/components/RequireAuth.jsx
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const RequireAuth = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/protected", {
            withCredentials: true, // 🔥 sends httpOnly cookie
        })
            .then(() => setAuthenticated(true))
            .catch(() => setAuthenticated(false));
    }, []);

    if (authenticated === null) return <div>Checking auth...</div>;
    if (!authenticated) return <Navigate to="https://authxui-uat.vercel.app?redirect_uri=http://localhost:5173/callback/login&domain=localhost" />;
    return children;
};

export default RequireAuth;
