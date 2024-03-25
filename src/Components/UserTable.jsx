import { useContext } from 'react';
import './styles/styleUserTable.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
const UserTable = ({ userDetails }) => {
  const { theme } = useContext(ThemeContext);
  const { tableTheme } = getClasses(theme);
  const { name, email, phone, website } = userDetails;
  return (
    <div className='table-container'>
      <table className={tableTheme}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
