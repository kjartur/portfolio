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
            <div class="resume_text">
            <h2 style={{paddingTop: '2em'}}>Biography</h2>
            <h4 style={{color: 'white'}}>Kjartan Manvelyan, Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Hi, I'm Kjartan, a Norwegian fullstack developer and entrepreneur. I grew up on a small island on the Arctic Circle, and have been a technologist since I built my first computer in the 80s. My main interests are DevOps and web application development.
            <p></p><p>I am currently in the process of taking the AWS Solutions Architect Associate certification, and plan to move on to Kubernetes thereafter.</p>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>RESIDENCE</h5>
            <p>Berlin, Germany</p>
            <h5>WORKING PERMIT</h5>
            <p>I have <b>full</b> working permissions both in EU and Norway.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2019}
              schoolName="Le Wagon: Fullstack Web Developer"
              schoolDescription="
              Le Wagon is ranked as the worlds best coding bootcamp for the past 3 years. Lecture and exercise topics includes:
              Ruby, Ruby on Rails, OOP, APIs, JSON, Scraping, Relational DB, SQL, Postgresql, HTML, CSS, Bootstrap, JavaScript ES6, React, Wireframing, Prototyping, UI Design, Test Driven Development, Git, Github, Technical Workflow."
               />

               <Education
                 startYear={2003}
                 endYear={2004}
                 schoolName="Norwegian University of Science and Technology"
                 schoolDescription="I was headhunted to a consultant position at <i>Norwegian Data Centre</i> after the first semester. Since I also studied computer science at Nesna University College at the age of 16, I have about half of a bachelors degree in Computer Science."
                  />

                  <Education
                 startYear={2004}
                 endYear={2010}
                 schoolName="University Medical School of Pécs"
                 schoolDescription="Medical Doctor programme"
                  />
                <hr style={{borderTop: '3px solid #f0145f'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Fullstack Developer / Consultant"
              jobDescription="Technical consultations for startups, Ruby and Wordpress development, SEO consultations."
              />

              <Experience
                startYear={2018}
                endYear={2019}
                jobName="Co-founder, KoanVR"
                jobDescription="KoanVR is a health-tech startup in Berlin. We provide VR therapy for medium and large sized companies to reduce stress levels and drastically improve the work atmosphere and well-being of employees."

                />

                <Experience
                  startYear={2019}
                  endYear={2019}
                  jobName="Project Manager, Learn.tech"
                  jobDescription="Learn.tech is Norways largest tech podcast and e-learning platform, founded by former Altavista co-founder, Silvija Seres."
                  />

                  <Experience
                    startYear={2019}
                    endYear={2019}
                    jobName="Community Coordinator, Future Leaders Global"
                    jobDescription="Future Leaders Global is a Norwegian non-profit providing a sustainability focused leadership program for young talents."
                    />

                    <Experience
                    startYear={2012}
                    endYear={2014}
                    jobName="Managing Director, Mørketid "
                    jobDescription="Mørketid was a Norwegian media production company that produced music videos, commercial videos and photography services across the country."
                    />
              <hr style={{borderTop: '3px solid #f0145f'}} />
              <h2>Skills</h2>
              <Skills
                skill="Ruby"
                progress={40}
                />
                <Skills
                    skill="JavaScript"
                    progress={20}
                    />
                    <Skills
                      skill="HTML/CSS"
                      progress={65}
                      />
                      <Skills
                        skill="Linux"
                        progress={50}
                        />
                        <Skills
                          skill="React"
                          progress={20}
                          />
                          <Skills
                            skill="AWS"
                            progress={35}
                            />
                            <Skills
                            skill="Docker"
                            progress={20}
                            />
                             <Skills
                            skill="Git"
                            progress={40}
                            />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
