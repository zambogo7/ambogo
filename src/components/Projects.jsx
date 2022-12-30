import React from 'react'
import '../styles/css/projects.css'
import CertGen from '../images/Certificate generator.png'
import Msafaris from '../images/Metraverse Safaris.png'
import Mbnb from '../images/Metabnb.png'
import { FiGithub } from 'react-icons/fi'
import { FiExternalLink } from 'react-icons/fi'

const Projects = () => {
    return (
        <div className="projects">
            <div className="pwrapper">
                <div className="pcontainer">
                    <h2 className="pTitle"><span className="pCounter">04. </span> &nbsp;&nbsp;&nbsp;&nbsp; Featured Projects</h2>
                    <div className="proj">
                        <div className="pflex">
                            <div className="projImage">
                                <a href="https://github.com/zambogo7/stageFour">
                                    <img src={CertGen} alt="Certigicate Generator" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">Certificatee Generator</h2>
                                <p>
                                    This is a simple Certificate Generator Frontend eb application. Users are able to Generate their Certificates easily. I did this project to further improve my skills in React Hooks  as this encompases all these aspects of development. It was fun and i hope you like it as well
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>scss</span>
                                    <span>css</span>
                                    <span>HTML</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/zambogo7/stageFour"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://stage-four.vercel.app/"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <div className="pflex pfreverse">
                            <div className="projImage">
                                <a href="https://metraversesafari.vercel.app/">
                                    <img src={Msafaris} alt="Metraverse Safaris" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">Metraverse Safaris</h2>
                                <p>
                                    This is a web application made to integrate virtual reality application that we made during Metaverse Competition, It gives the users easy access to view Kenyan National parks in Virtual World using a virtual reality headset.
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>Tailwindcss</span>
                                    <span>Css</span>
                                    <span>HTML</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/zambogo7/Metaverse"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://metraversesafari.vercel.app/"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="proj">
                        <div className="pflex">
                            <div className="projImage">
                                <a href="https://github.com/tenafric/tenafrik">
                                    <img src={Mbnb} alt="Metabnb" />
                                </a>
                            </div>
                            <div className="projTexts">
                                <h2 className="projTitle">Metabnb</h2>
                                <p>
                                    "Metabnb" is a project i implimented pixel perfect of a design, it is a frontend web app to showcase houses in the metaverse. It simulate Airbnb.
                                </p>
                                <div className="pstack">
                                    <span>React</span>
                                    <span>Tailwind</span>
                                    <span>scss</span>
                                    <span>javascript</span>
                                    <span>figma</span>
                                </div>
                                <div className="getCode">
                                    <span><a href="https://github.com/tenafric/tenafrik"><FiGithub title="Github"/></a></span>
                                    <span><a href="https://metabnb-umber.vercel.app/"><FiExternalLink title="View live site"/></a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="otherProjects">
                        <h2 className="oTitle">Other Noteworthy Projects</h2>
                        <div className="oproj">
                            <a href="https://www.hackerrank.com/zambogo7">
                                <h2 className="otproj">HackerRank</h2>
                            </a>
                            <p className="optexts">
                                I have been practicing alot on HackerRank. I have managed to complete alot of the coding challenges presented which is major achievement to me since i got verified Certification.
                            </p>
                            <div className="ostack">
                               <a href="https://www.hackerrank.com/certificates/9eeb7cc12252"> <span>python</span></a>
                               <a href="https://www.hackerrank.com/certificates/8c5f2cafe14a"> <span>React</span></a>
                               <a href="https://www.hackerrank.com/certificates/ef9ebf991204">  <span>Problem Solving (Data Structre and Algorithm)</span></a>
                               <a href="https://www.hackerrank.com/certificates/e32efd7bff5d"> <span>SQL</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects