import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para la navegación

import {
  useUsersFromLocalStorage,
  clearLocalStorageFavorites,
} from '../Components/utils/Api';
import Card from '../Components/Card';
import '../Components/styles/styleFavs.css';
const Favs = () => {
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
        <button
          onClick={handleClearLocalStorage}
          className='button-favs'
          disabled={favorites.length === 0}
        >
          Clear Favorites
        </button>
      </nav>
      {showMessage && (
        <p>
          Local storage esta siendo limpiado. Se redireccionará a la pagina
          principal en 3 segundos...
        </p>
      )}

      {loading && (
        <div>
          {favorites.length === 0
            ? 'No hay dentistas favoritos en este momento'
            : 'Loading...'}
        </div>
      )}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div className='cardContainer'>
          {favorites.map((favorite) => (
            <Card
              key={favorite.id}
              id={favorite.id}
              name={favorite.name}
              username={favorite.username}
              website={favorite.website}
              onDeleteFromFavorites={handleDeleteFavorites}
              isFavorite={true}
              messageBtn='Remove from favorites'
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favs;
