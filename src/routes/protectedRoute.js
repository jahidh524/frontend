import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import authService from "../services/authService";

const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authService.getUserInfo();
                if (user && user.name) {
                    setAuthenticated(true);
                } else {
                    localStorage.setItem("returnTo", window.location.pathname);
                    await authService.login({ redirectUri: window.location.origin });
                    return; // Redirecting, no need to continue
                }
            } catch (error) {
                localStorage.setItem("returnTo", window.location.pathname);
                console.error("Authentication check failed:", error);
                await authService.login({ redirectUri: window.location.origin });
                return; // Redirecting
            } finally {
                setLoading(false); // Done checking
            }
        };

        checkAuth();
    }, []);

    if (loading) return <div>Checking authentication...</div>;

    return authenticated ? <Outlet /> : null; // Don't render if not authenticated
};

export default ProtectedRoute;
