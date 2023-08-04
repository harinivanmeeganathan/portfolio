import { FaJava } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass
} from 'react-icons/di';
import { SiRedux, SiPython, SiPostgresql, SiPowerbi, SiAmazonec2 } from 'react-icons/si';
import {BiLogoSpringBoot} from 'react-icons/bi';
import './skills.styles.scss';

const TechSkills = () => {
  return (
    <ul className='container'>
      <li className='techIcon'>
        <DiJavascript1 />
      </li>
      <li className='techIcon'>
        <DiReact />
      </li>
      <li className='techIcon'>
        <DiNodejs />
      </li>
      <li className='techIcon'>
        <SiPython/>
      </li>
      <li className='techIcon'>
        <FaJava/>
      </li>
      <li className='techIcon'>
        <BiLogoSpringBoot/>
      </li>
      <li className='techIcon'>
        <DiMongodb />
      </li>
      <li className='techIcon'>
        <DiSass />
      </li>
      <li className='techIcon'>
        <GrMysql />
      </li>
      <li className='techIcon'>
        <SiRedux />
      </li>
      <li className='techIcon'>
        <SiCplusplus />
      </li>
      <li className='techIcon'>
        <DiGit />
      </li>
      <li className='techIcon'>
        <SiPostgresql/>
      </li>
      <li className='techIcon'>
        <SiAmazonec2/>
      </li>
      <li className='techIcon'>
        <SiPowerbi/>
      </li>
    </ul>
  );
};

export default TechSkills;
