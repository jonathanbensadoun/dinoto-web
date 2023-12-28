import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { GiDinosaurBones } from 'react-icons/gi';

function Footer() {
  return (
    <div className="container-footer">
      <div className="container-ball-footer">
        <a
          href="https://github.com/jonathanbensadoun"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <FaGithub className=" icon" />
        </a>
      </div>
      <div className="container-ball-footer">
        <a
          href="https://www.linkedin.com/in/jonathan-bensadoun/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Linkedin"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
      <div className="container-ball-footer">
        <a
          href="http://dinotoapi.com/doc"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="DinotoApi"
        >
          <GiDinosaurBones className="icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
