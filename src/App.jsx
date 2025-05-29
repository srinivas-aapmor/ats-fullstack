import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import routes from './configs/routesConfig';
function App() {

  return (
    <>
      <div>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
            
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
