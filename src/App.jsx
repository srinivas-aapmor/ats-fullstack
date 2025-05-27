import './App.css'
import Upload from './pages/Upload'
import ResumeAnaysis from './pages/ResumeAnaysis'
import { Routes, Route } from 'react-router-dom';
import routes from './configs/routesConfig';

function App() {

  return (
    <>
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
