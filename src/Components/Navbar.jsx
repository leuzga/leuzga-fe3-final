import { useContext } from 'react';
import { Link } from 'react-router-dom';
import routes from '../Routes/routes';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
import iconThemeLight from '../../public/images/eclipse-moon-light.svg';
import iconThemeDark from '../../public/images/eclipse-moon-dark.svg';
import './styles/styleNavBar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { navTheme, bgNav, themeBtn } = getClasses(theme);

  return (
    <nav className={navTheme}>
      <div className={bgNav}>
        {routes.map(({ path, name }) => {
          if (name !== 'Detail') {
            return (
              <div key={path}>
                <Link to={path}>
                  <div className='button-nav'>{name}</div>
                </Link>
              </div>
            );
          }
          return null;
        })}
        <button className={themeBtn} onClick={toggleTheme}>
          <img
            src={theme === 'light' ? iconThemeDark : iconThemeLight}
            alt='Toggle Theme'
            width={32}
            height={32}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
