import { useState, useContext } from 'react';
import './styles/styleForm.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import { getClasses } from '../Components/utils/themeUtils';

function Form() {
  const { theme } = useContext(ThemeContext);

  const { containerForm, inputs } = getClasses(theme);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    errorNombre: '',
    errorEmail: '',
    enviado: false,
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(), // Elimina espacios innecesarios al inicio y al final
      errorNombre:
        name === 'nombre' && value.length <= 5
          ? 'El nombre debe tener más de 5 caracteres'
          : '',
      errorEmail:
        name === 'email' && !/^\S+@\S+\.\S+$/.test(value)
          ? 'Por favor introduce un email válido'
          : '',
    });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, errorNombre, errorEmail } = formData;

    // Verificar si hay errores antes de proceder
    let isValid = true;

    // Validar que los campos no estén vacíos
    if (!nombre.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        errorNombre: 'El nombre es requerido',
      }));
      isValid = false;
    }

    if (!email.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        errorEmail: 'El email es requerido',
      }));
      isValid = false;
    }

    // Validar el formato del email
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      setFormData((prevData) => ({
        ...prevData,
        errorEmail: 'Por favor introduce un email válido',
      }));
      isValid = false;
    }

    // Si todo es válido, proceder con el envío
    if (isValid) {
      if (!errorNombre && !errorEmail) {
        console.log('Datos enviados:', { nombre, email }); // Simplemente mostrar los datos en consola
        setFormData({
          ...formData,
          enviado: true,
        });
      }
    }
  };

  // Función para manejar el reset limpieza de campos del formulario
  const handleReset = () => {
    setFormData({
      nombre: '',
      email: '',
      errorNombre: '',
      errorEmail: '',
      enviado: false,
    });
  };

  const { nombre, email, errorNombre, errorEmail, enviado } = formData;

  return (
    <div className={containerForm}>
      {enviado ? (
        <>
          <h4>Gracias {nombre}, te contactaremos cuanto antes vía email.</h4>
          <button type='button' className='btnSubmit' onClick={handleReset}>
            Limpiar
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre completo:</label>
            <input
              type='text'
              id='nombre'
              name='nombre'
              value={nombre}
              onChange={handleChange}
              className={inputs}
            />
            {errorNombre && <p className='error-message'>{errorNombre}</p>}
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleChange}
              className={inputs}
            />
            {errorEmail && <p className='error-message'>{errorEmail}</p>}
          </div>
          <button type='submit' className='btnSubmit'>
            Enviar
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;
