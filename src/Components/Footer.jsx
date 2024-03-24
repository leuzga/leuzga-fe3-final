import logoDH from '../../public/images/DH.png';
import logofacebook from '../../public/images/ico-facebook.png';
import logoInstagram from '../../public/images/ico-instagram.png';
import logoTiktok from '../../public/images/ico-tiktok.png';
import logoWhatsapp from '../../public/images/ico-whatsapp.png';
const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={logoDH} alt='DH-logo' />
      <br />
      <span className='footer-icons'>
        <img src={logofacebook} width={24} height={24} alt='icon facebook' />
        <img src={logoInstagram} width={24} height={24} alt='DH-logo' />
        <img src={logoTiktok} width={24} height={24} alt='DH-logo' />
        <img src={logoWhatsapp} width={24} height={24} alt='DH-logo' />
      </span>
    </footer>
  );
};

export default Footer;
