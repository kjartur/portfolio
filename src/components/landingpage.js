import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/ZzdCt7Z/press.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Kjartan Manvelyan</h1>
          <h3><i>Software Developer</i></h3>
          <p>I'm a Scandinavian fullstack developer and entrepreneur, and an alumni of Le Wagon, a top ranked coding school. My main interests are DevOps and web application development. I'm a big fan of cloud computing and automation.</p>
            <hr/>

          <p>HTML/CSS | Ruby/Rails | JavaScript | React | Git | Docker | AWS</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kjartanmanvelyan/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/kjartur" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* AngelList */}
          <a href="https://angel.co/kjartan-manvelyan" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-angellist" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
