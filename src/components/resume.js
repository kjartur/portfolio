import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>

            </div>

            <h2 style={{paddingTop: '2em'}}>Kjartan Manvelyan</h2>
            <h4 style={{color: 'lightgrey'}}>Fullstack Developer / Devops Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a Scandinavian fullstack developer and entrepreneur, and an alumni of Le Wagon.
               My current main interests are DevOps and web application development. But a developer should never be tied to one language, so I'm constantly adapting to new systems and frameworks. I am currently in the process of taking the AWS Solutions Architect Associate certification.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Residence</h5>
            <p>Berlin, Germany</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Le Wagon Fullstack Dev Bootcamp"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2003}
                 endYear={2004}
                 schoolName="Norwegian University of Science and Technology"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #f0145f'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #f0145f'}} />
              <h2>Skills</h2>
              <Skills
                skill="Ruby"
                progress={50}
                />
                <Skills
                    skill="JavaScript"
                    progress={30}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={80}
                      />
                      <Skills
                        skill="NodeJS"
                        progress={25}
                        />
                        <Skills
                          skill="React"
                          progress={25}
                          />
                          <Skills
                            skill="AWS"
                            progress={35}
                            />
                            <Skills
                            skill="Kubernetes"
                            progress={20}
                            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
