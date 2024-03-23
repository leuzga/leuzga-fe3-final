import { useContext, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
import {
  useUsersFromLocalStorage,
  clearLocalStorageFavorites,
} from '../Components/utils/Api';
import Card from '../Components/Card';

const Favs = () => {
  const { theme } = useContext(ThemeContext);
  const { cardContainer, botonNav } = getClasses(theme);
  const [favorites, setFavorites] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate(); // Instancia de useNavigate para la navegación
  const { loading, error } = useUsersFromLocalStorage();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleDeleteFavorites = useCallback(
    (id) => {
      const updatedFavorites = favorites.filter((user) => user.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    },
    [favorites]
  );

  const handleClearLocalStorage = useCallback(() => {
    clearLocalStorageFavorites();
    setFavorites([]); // Limpiar las tarjetas
    setShowMessage(true);
  }, []);

  // Effect to redirect after 10 seconds
  useEffect(() => {
    let redirectTimer;
    if (showMessage) {
      redirectTimer = setTimeout(() => {
        setShowMessage(false);
        navigate('/');
      }, 3000);
    }
    return () => clearTimeout(redirectTimer);
  }, [showMessage, navigate]);

  return (
    <div className='content-page-favs' style={{ marginTop: '70px' }}>
      <h1>Dentists Favorites</h1>
      <nav className='alineaBtn'>
        <button onClick={handleClearLocalStorage} className={botonNav}>
          Clear Favorites
        </button>
      </nav>
      {showMessage && (
        <p>
          Local storage esta siendo limpiado. Se redireccionará a la pagina
          principal en 3 segundos...
        </p>
      )}
      <div className='card-grid'>
        <div className='content-page-home'>
          <div className={cardContainer}>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {!loading &&
              !error &&
              favorites.map((favorite) => (
                <div key={favorite.id} className='card-wrapper'>
                  <Card
                    id={favorite.id}
                    name={favorite.name}
                    username={favorite.username}
                    website={favorite.website}
                    onDeleteFromFavorites={handleDeleteFavorites}
                    isFavorite={true}
                    messageBtn='Remove from favorites'
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favs;
