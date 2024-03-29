import React from "react";

function MySkills(props) {
  const skill_section = () => {
    return (
      <div className="container ">
        <div className="row">
          <div className=" skill col-md-6 col-sm-12">
            <div className="skills_section">
              <div className="skills_head">
                <h2>
                  My <span>Skills</span>
                </h2>
                <p>Here is my skills to represent my Expertise</p>
              </div>

              <div className="skills_mai">
                <div className="skill_bar">
                  <div className="info">
                    <p>HTML</p>
                    <p>90%</p>
                  </div>
                  <div className="bar">
                    <span className="html"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>CSS</p>
                    <p>85%</p>
                  </div>
                  <div className="bar">
                    <span className="css"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>SASS</p>
                    <p>80%</p>
                  </div>
                  <div className="bar">
                    <span className="sass"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>Java Script</p>
                    <p>80%</p>
                  </div>
                  <div className="bar">
                    <span className="js"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>React js</p>
                    <p>75%</p>
                  </div>
                  <div className="bar">
                    <span className="react"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>Node js</p>
                    <p>70%</p>
                  </div>
                  <div className="bar">
                    <span className="node"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>Express js</p>
                    <p>65%</p>
                  </div>
                  <div className="bar">
                    <span className="express"></span>
                  </div>
                </div>
                <div className="skill_bar">
                  <div className="info">
                    <p>Mongo DB</p>
                    <p>60%</p>
                  </div>
                  <div className="bar">
                    <span className="mongo"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{skill_section()}</div>;
}

export default MySkills;
