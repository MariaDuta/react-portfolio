import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='navbar__title'>mariaduta</h1>
      <div className='navbar__socials'>
        <a href='https://github.com/MariaDuta' target={"_blank"}>
          <FaGithub className='navbar__icon' size={22} />
        </a>
        <a
          href='https://www.linkedin.com/in/maria-georgiana-duta-1b54b4192/'
          target={"_blank"}
        >
          <FaLinkedin className='navbar__icon' size={22} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
