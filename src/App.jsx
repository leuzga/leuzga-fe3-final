import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './Routes/routes';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

import { ThemeProvider } from './Contexts/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className='appContainer'>
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Navbar />
          <div className='separator'>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
