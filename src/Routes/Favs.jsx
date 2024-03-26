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
          {favorites.length === 0 ? (
            'No hay dentistas favoritos en este momento'
          ) : (
            <div
              style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 200'
                style={{ width: '300px', height: '100px' }}
              >
                <circle
                  fill='#ECAB01'
                  stroke='#ECAB01'
                  strokeWidth='15'
                  r='15'
                  cx='40'
                  cy='65'
                >
                  <animate
                    attributeName='cy'
                    calcMode='spline'
                    dur='2'
                    values='65;135;65;'
                    keySplines='.5 0 .5 1;.5 0 .5 1'
                    repeatCount='indefinite'
                    begin='-.4'
                  ></animate>
                </circle>
                <circle
                  fill='#ECAB01'
                  stroke='#ECAB01'
                  strokeWidth='15'
                  r='15'
                  cx='100'
                  cy='65'
                >
                  <animate
                    attributeName='cy'
                    calcMode='spline'
                    dur='2'
                    values='65;135;65;'
                    keySplines='.5 0 .5 1;.5 0 .5 1'
                    repeatCount='indefinite'
                    begin='-.2'
                  ></animate>
                </circle>
                <circle
                  fill='#ECAB01'
                  stroke='#ECAB01'
                  strokeWidth='15'
                  r='15'
                  cx='160'
                  cy='65'
                >
                  <animate
                    attributeName='cy'
                    calcMode='spline'
                    dur='2'
                    values='65;135;65;'
                    keySplines='.5 0 .5 1;.5 0 .5 1'
                    repeatCount='indefinite'
                    begin='0'
                  ></animate>
                </circle>
              </svg>
              <h1>Loading...</h1>
            </div>
          )}
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
