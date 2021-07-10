import React from 'react';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import ChangingProgressProvider from '../../components/progressbar/Progress.component';
import 'react-circular-progressbar/dist/styles.css';
import './resume.styles.scss';

const Resume = () => {
return(
    <div className = 'resume-container'>
           <h1 className = 'resume-title'>Resume</h1> 
        <div className = 'resume'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        <div className = 'circle'>
        <ChangingProgressProvider values = '|' className = 'line'>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={percentage}
            styles={buildStyles({
              pathTransitionDuration: 0.15
            })}
          />
        )}
    </ChangingProgressProvider>
                </div>
        </div>

    </div>

);

}

export default Resume;