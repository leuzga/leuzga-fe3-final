import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Preload from '../Components/Preload';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
import { useUserDetailsFromApi } from '../Components/utils/Api';
import UserTable from '../Components/UserTable';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { detailContent } = getClasses(theme);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { id } = useParams();
  const { userDetails, loading, error } = useUserDetailsFromApi(id);
  return (
    <>
      <div className={detailContent}>
        <div style={{ marginTop: '70px' }}>
          <h1>Detail Dentist id </h1>
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          {loading && <Preload />}
          {error && <div>Error: {error}</div>}
          {!loading && !error && userDetails && (
            <UserTable userDetails={userDetails} />
          )}
        </div>
      </div>
    </>
  );
};

export default Detail;
