import React, { useEffect } from 'react'
import '../styles/css/landing.css'
import Downloadbtn from './Downloadb'
import Wave from '../images/wave.png'
import Zeddy from '../images/person.png'
import { ReactComponent as Scroll } from '../images/scroll.svg'
import { FiGithub } from 'react-icons/fi'
// import DownloadIcon from '@mui/icons-material/Download'

const Landing = () => {
  useEffect(() => {
      window.addEventListener('scroll', hidecallToActionScroll);
      return () => {
          window.removeEventListener('scroll', hidecallToActionScroll);
      };
  });

  const hidecallToActionScroll = (e) => {
      const act = document.querySelector('.callToActionScroll');
      const scrollTop = window.scrollY;
      scrollTop >= 70 ? act.classList.add('hidecallToActionScroll') : act.classList.remove('hidecallToActionScroll');
  };
  return (
    <div className="landing">
      <div className="lcontainer">
        <div className="lwrapper">
          <div className="lflex">
            <div className="ltexts">
              <p className="lcachy">Hi, <img className="wave" src={Wave} alt="👋"/> I am</p>
              <h1 className="myname">Zedekiah Ambogo, </h1>
              <h2 className="lintrotxts">
                a software developer focused on building immersive and beautiful web applications and Virtual reality applications, with great functionality through carefully crafted code and user-centric design. 
              </h2>
              <div className="pouterLinks">
                  <div className="git">
                      <a className="draw" target="blank" href="https://github.com/zambogo7"><FiGithub className="pIcons" /><span className="talign">&nbsp;&nbsp;Github</span></a>
                  </div>
                
                    <Downloadbtn />
              </div>
            </div>
            <div className="limages">
              <div className="limageWrapper">
                <img draggable="false" className="denoo" src={Zeddy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="callToActionScroll" style={{ paddingBottom: "15px"}}>
        <Scroll className="thescroll" />
      </span>
    </div>
  )
}

export default Landing