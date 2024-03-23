import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src='../../public/images/DH.png' alt='DH-logo' />
      <br />
      <span className='footer-icons'>
        <img
          src='../../public/images/ico-facebook.png'
          width={24}
          height={24}
          alt='icon facebook'
        />
        <img
          src='../../public/images/ico-instagram.png'
          width={24}
          height={24}
          alt='DH-logo'
        />
        <img
          src='../../public/images/ico-tiktok.png'
          width={24}
          height={24}
          alt='DH-logo'
        />
        <img
          src='../../public/images/ico-whatsapp.png'
          width={24}
          height={24}
          alt='DH-logo'
        />
      </span>
    </footer>
  );
};

export default Footer;
