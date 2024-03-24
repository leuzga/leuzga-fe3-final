import { useEffect, useReducer, useMemo, useCallback } from 'react';

// Reducer para manejar el estado de los usuarios
const userReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'FETCH_USER_DETAILS_SUCCESS':
      return {
        ...state,
        loading: false,
        userDetails: action.payload, // Actualiza userDetails con los detalles del usuario
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Función para obtener los usuarios desde el API
export const useUsersFromApi = () => {
  const initialState = {
    users: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const fetchUsersFromApi = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchUsersFromApi();
  }, []);

  return useMemo(() => state, [state]);
};

// Función para limpiar el localstorage desde el API
export const clearLocalStorageFavorites = () => {
  localStorage.removeItem('favorites');
  window.dispatchEvent(new Event('favoritesCleared'));
};

// Función para obtener los usuarios desde el localStorage
export const useUsersFromLocalStorage = () => {
  const initialState = {
    users: [],
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const getUsersFromLocalStorage = useCallback(() => {
    try {
      const usersData = localStorage.getItem('favorites');
      if (usersData) {
        const data = JSON.parse(usersData);
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
      }
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, []);

  useEffect(() => {
    getUsersFromLocalStorage();
  }, [getUsersFromLocalStorage]);

  return useMemo(() => state, [state]);
};

// Función para obtener los detalles de un usuario por ID desde el API
export const useUserDetailsFromApi = (userId) => {
  const initialState = {
    userDetails: {},
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);
  const fetchUserDetailsFromApi = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      dispatch({ type: 'FETCH_USER_DETAILS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, [userId]);

  useEffect(() => {
    fetchUserDetailsFromApi();
  }, [fetchUserDetailsFromApi]);

  return useMemo(() => state, [state]);
};
