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
            <h2 style={{paddingTop: '2em'}}>Kjartan Manvelyan</h2>
            <h4 style={{color: 'white'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I'm a Scandinavian fullstack developer and entrepreneur, and an alumni of Le Wagon, a top ranked coding school. My main interests are DevOps and web application development. But a developer should never be tied to one language, so I'm constantly adapting to new systems and frameworks.
            <p></p><p>I am currently in the process of taking the AWS Solutions Architect Associate certification.</p>
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
                 schoolDescription="I was headhunted to a sales position at Norwegian Data Centre after the first semester, and started medical school a year later. Since I also studied informatics at Nesna university college during my high school years, I have about half of a bachelors degree in Computer Science."
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
                jobDescription="KoanVR is a health-tech startup in Berlin. We provide VR therapy for medium and large sized companies to reduce stress levels and drastically improve the work atmosphere and well-being of employees.
"
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
                        progress={25}
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


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
