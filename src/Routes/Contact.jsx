import { useContext } from 'react';
import Form from '../Components/Form';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { cardContainer } = getClasses(theme);

  return (
    <div className='content-page-contact' style={{ marginTop: '70px' }}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
