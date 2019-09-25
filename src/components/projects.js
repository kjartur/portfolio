import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/Wk4KLqQ/Screen-Shot-2019-09-23-at-06-35-33.png) center / cover'}} >NABO</CardTitle>
            <CardText>
              NABO is a non-monetary social platform where users can help each other through the exchange of time.

              Built on Ruby on Rails / HTML5 / CSS and JavaScript.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/qjSMD87/Screen-Shot-2019-09-23-at-10-09-46.png) center / cover'}} >React portfolio</CardTitle>
            <CardText>
              The site you are currently browsing; A React based personal portfolio app using create-react-app and React Router v4.
            </CardText>
            <CardActions border>

              <Button colored>Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/Wk4KLqQ/Screen-Shot-2019-09-23-at-06-35-33.png) center / cover'}} >AWS Solutions Architect Associate</CardTitle>
            <CardText>
              AWS Solutions Architect Associate certification.
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Wordpress</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is Shopify</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Ruby on Rails/React</Tab>
          <Tab>AWS</Tab>
          <Tab>Wordpress</Tab>
          <Tab>Shopify</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
