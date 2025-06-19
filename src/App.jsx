import React, { useEffect, useContext } from 'react';
import './App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import routes from './configs/routesConfig';
import ProtectedRoute from "./components/ProtectedRoutes";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import UserContext from "./context/UserContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const token = Cookies.get('token');

    try {
      if (!token) throw new Error('No token');

      const decoded = jwtDecode(token);

      setUser({
        name: decoded.FullName,
        email: decoded.Email,
        role: decoded.SpaceName,
        access: decoded.Access || []
      });

      // If user is at root or login, send them to home
      if (location.pathname === '/' || location.pathname === '/login') {
        navigate('/home');
      }

    } catch (err) {
      console.warn('Token invalid or missing:', err.message);

      // Only redirect to login if not already there
      if (location.pathname !== '/login') {
        navigate('/login');
      }
    }
  }, []);

  return (
    <div>
      <Routes>
        {routes.map(({ path, element, requiredAccess, allowedPreviousPaths = [] }, index) => (
          <Route
            key={index}
            path={path}
            element={
              requiredAccess ? (
                <ProtectedRoute
                  requiredAccess={requiredAccess}
                  allowedPreviousPaths={allowedPreviousPaths}
                >
                  {element}
                </ProtectedRoute>
              ) : (
                element
              )
            }
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
