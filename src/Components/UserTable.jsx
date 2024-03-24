import './styleUserTable.css';
const UserTable = ({ userDetails }) => {
  const { name, email, phone, website } = userDetails;
  return (
    <div className='table-container'>
      <table>
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
