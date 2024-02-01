import { FaJava } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiPython,
  DiAws
} from 'react-icons/di';
import { SiRedux,SiTensorflow,SiJupyter,SiPowerbi,SiPostgresql } from 'react-icons/si';
import './skills.styles.scss';

const TechSkills = () => {
  return (
    <ul className='container'>
      <li className='techIcon'>
        <DiPython/>
      </li>
      <li className='techIcon'>
        <SiTensorflow/>
      </li>
      <li className='techIcon'>
        <SiPowerbi/>
      </li>
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
        <FaJava/>
      </li>
      <li className='techIcon'>
        <DiAws/>
      </li>    
      <li className='techIcon'>
        <SiPostgresql/>
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
        <SiJupyter/>
      </li>
      <li className='techIcon'>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
