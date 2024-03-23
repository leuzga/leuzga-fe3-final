import { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import './styleCard.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
import { Link } from 'react-router-dom';

const Card = ({
  id,
  name,
  username,
  website,
  onAddToFavorites,
  onDeleteFromFavorites,
  isFavorite,
  disabled,
  messageBtn,
}) => {
  const { theme } = useContext(ThemeContext);
  const { cardTheme, h2Theme, pTheme, disabledButton } = getClasses(theme);

  const handleAddToFavorites = useCallback(() => {
    onAddToFavorites({ id, name, username, website });
  }, [id, name, username, website, onAddToFavorites]);
  const handleDeleteFromFavorites = useCallback(() => {
    if (!disabled) {
      onDeleteFromFavorites(id);
    }
  }, [id, onDeleteFromFavorites, disabled]);

  return (
    <div className={cardTheme}>
      <Link to='/detail'>
        <div className='card-content'>
          <div className='card-left'>
            <img src={`https://i.pravatar.cc/150?u=${username}`} alt={name} />
          </div>
          <div className='card-right'>
            <h2 className={h2Theme}>{name.trim()}</h2>
            <p className={pTheme}>{username}</p>
            <p>{website}</p>
          </div>
        </div>
      </Link>
      <div className='card-actions'>
        <button
          onClick={
            isFavorite ? handleDeleteFromFavorites : handleAddToFavorites
          }
          className={isFavorite ? '' : disabledButton}
          disabled={disabled}
        >
          {messageBtn}{' '}
          {/* Utilizamos la prop messageBtn para el mensaje del botón */}
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  onAddToFavorites: PropTypes.func,
  onDeleteFromFavorites: PropTypes.func,
  isFavorite: PropTypes.bool,
  disabled: PropTypes.bool,
  messageBtn: PropTypes.string.isRequired,
};

export default Card;
