import React from 'react'
import '../styles/css/background.css'
import Dennis from '../images/zeddy-image.png'

const background = () => {
  return (
    <div className="background">
        <div className="bwrapper">
            <div className="bcontainer">
                <div className="bflex">
                    <div className="dennisImage">
                        <div className="img-blk-wrapper">
                            <div className="img-blk">
                                <img src={Dennis} alt="" />     
                            </div>
                        </div>
                    </div>
                    <div className="bTexts">
                        <h2 className="btTitle"> &nbsp;&nbsp; <span style={{ paddingRight: "15px" }}>Background</span> &nbsp;&nbsp; <span className="secCounter"> .01</span> </h2>
                        <p className="backtexts">
                        I am a developer, adept in all stages of
                        advanced web and software development. Knowledgeable in
                        user interface, testing, and debugging processes. Bringing forth
                        expertise in design, installation, testing and maintenance of
                        web and software systems.
                        <br /><br />
                        Intermediate in an assortment of technologies, including HTML,
                        Python, C#,  CSS, SQL and JavaScript. Django and React frameworks. Able to
                        effectively self-manage during independent projects, as well as
                        collaborate in a team setting.
                        <br /><br />
                        I am flexible in the field of technology since I have basic
                        knowledge in computer networking, software testing, database
                        systems, object-oriented programming, Linux commands and
                        Version control.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default background