import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './Routes/routes';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Preload from './Components/Preload';

import { useTheme } from './Contexts/ThemeContext';
import { getClasses } from './Components/utils/themeUtils';
import './App.css';

function App() {
  const { theme } = useTheme();
  const { themeContent } = getClasses(theme);
  return (
    <div className='container'>
      <Suspense fallback={<Preload />}>
        <header>
          <Navbar />
        </header>
        <main className={`content ${themeContent}`}>
          <div className='content-inner'>
            <Routes>
              {routes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
              ))}
            </Routes>
          </div>
        </main>
        <footer className='footer'>
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
