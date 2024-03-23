import { useEffect, useState, useCallback, useContext } from 'react';
import { useUsersFromApi } from '../Components/utils/Api';
import Card from '../Components/Card';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users, loading, error } = useUsersFromApi();
  const [favorites, setFavorites] = useState([]);
  const [addedToFavorites, setAddedToFavorites] = useState({});
  const { theme } = useContext(ThemeContext);
  const { cardContainer } = getClasses(theme);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
    const initialAddedToFavorites = {};
    storedFavorites.forEach((user) => {
      initialAddedToFavorites[user.id] = true;
    });
    setAddedToFavorites(initialAddedToFavorites);
  }, []);

  const handleAddToFavorites = useCallback(
    (user) => {
      const isUserInFavorites = favorites.some((fav) => fav.id === user.id);
      if (!isUserInFavorites) {
        const updatedFavorites = [...favorites, user];
        setFavorites(updatedFavorites);
        setAddedToFavorites({ ...addedToFavorites, [user.id]: true });
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      }
    },
    [favorites]
  );

  const handleAddToFavoritesDisabled = useCallback(
    (user) => {
      return favorites.some((fav) => fav.id === user.id);
    },
    [favorites]
  );

  return (
    <main className='content-page-home' style={{ marginTop: '70px' }}>
      <h1>Home</h1>
      <h2>Odontologos Disponibles para Citas</h2>
      <div className='content-page-home'>
        <div className={cardContainer}>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          {!loading &&
            !error &&
            users.map((user) => (
              <div key={user.id} className='card-wrapper'>
                <Card
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  website={user.website}
                  onAddToFavorites={handleAddToFavorites}
                  isFavorite={favorites.some((fav) => fav.id === user.id)}
                  disabled={addedToFavorites[user.id]}
                  messageBtn={
                    addedToFavorites[user.id]
                      ? 'Added to Favorites'
                      : 'Add to Favorites'
                  }
                />
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
