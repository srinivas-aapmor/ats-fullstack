import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import routes from './configs/routesConfig';
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <Routes>
        {routes.map(({ path, element, requiredAccess, allowedPreviousPaths = [] }, index) => (
          <Route key={index} path={path}
            element={
              requiredAccess ? (
                <ProtectedRoute requiredAccess={requiredAccess}
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