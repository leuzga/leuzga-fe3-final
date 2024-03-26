import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import './styles/styleToasty.css';

const Toasty = ({ children, message }) => {
  const [show, setShow] = useState(false);
  const timerRef = useRef();

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setShow(true), 3000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setShow(false);
  };

  const rootElement = document.getElementById('root');

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {show &&
        createPortal(
          <div
            className='toasty'
            style={{
              position: 'fixed',
              top: '60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 'max-content',
              zIndex: '1000',
              padding: '8px 40px',
            }}
          >
            <p>{message}</p>
            <div
              className='progress'
              style={{ animation: `decrease 5s linear` }}
            ></div>
          </div>,
          rootElement
        )}
    </div>
  );
};

Toasty.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
};

export default Toasty;
