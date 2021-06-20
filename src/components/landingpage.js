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
          <p>I'm a Scandinavian fullstack developer and entrepreneur, and an alumni of Le Wagon, a fullstack coding school. My main interests in tech lies within the fields of social entrepreneurship, blockchain technologies and web application development. Please visit my LinkedIn if you want to connect.</p>
            <hr/>

          <p><b>HTML/CSS | Ruby/Rails | JavaScript | React | Git | Docker | AWS</b></p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/kjartanmanvelyan/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
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
