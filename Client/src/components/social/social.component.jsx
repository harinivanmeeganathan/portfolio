import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import './social.styles.scss';
const SocialLinks = () => {
  return (
    <div className='introSocial'>
      <h1><span className='purple'>Connect with me</span></h1>
      <ul className='socialLinks'>
        <li className='socialLink'>
          <a
            href="https://github.com/harinivanmeeganathan"
            target="_blank"
            rel="noreferrer"
            className='socialIcon'>
            <AiFillGithub className="icon" />
          </a>
        </li>
        <li className='socialLink'>
          <a
            href="https://www.linkedin.com/in/harinivanmeeganathan/"
            target="_blank"
            rel="noreferrer"
            className='socialIcon'>
            <FaLinkedinIn className="icon" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks;