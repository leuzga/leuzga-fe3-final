import { useContext } from 'react';
import { useParams } from 'react-router-dom';

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
          {loading && (
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
              <br />
              <h1>Loading...</h1>
            </div>
          )}
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
