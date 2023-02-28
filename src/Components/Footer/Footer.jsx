import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <h1 className='footer__title'>MariaDuta © 2023</h1>
        <div className='footer__socials'>
          <a href='https://github.com/MariaDuta' target={"_blank"}>
            <FaGithub className='footer__icon' size={22} />
          </a>
          <a
            href='https://www.linkedin.com/in/maria-georgiana-duta-1b54b4192/'
            target={"_blank"}
          >
            <FaLinkedin className='footer__icon' size={22} />
          </a>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;
