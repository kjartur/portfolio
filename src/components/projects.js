import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

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
              <Button colored><a href="https://github.com/kjartur/nabo">GitHub</a></Button>
              <Button colored><a href="https://www.nabo.world">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/qjSMD87/Screen-Shot-2019-09-23-at-10-09-46.png) center / cover'}} >Portfolio</CardTitle>
            <CardText>
              The site you are currently browsing; A React based personal portfolio app using create-react-app and React Router v4.
            </CardText>
            <CardActions border>

              <Button colored><a href="https://github.com/kjartur/portfolio">GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/mH25QXN/Screen-Shot-2019-09-25-at-03-24-22.png) center / cover'}} >thought.food</CardTitle>
            <CardText>
              AirBnB-clone built on Ruby on Rails. thought.food is a platform where people can meet to share meals and discuss interesting topics.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/kjartur/mealshare">GitHub</a></Button>
              <Button colored><a href="http://mealshare-berlin.herokuapp.com">Live Demo</a></Button>
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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/tJZZHqd/Screen-Shot-2019-09-25-at-03-54-48.png) center / cover'}} >Shopify webstore</CardTitle>
            <CardText>
              Global organic coffee brand. Customized theme (Ruby/Shopify).
            </CardText>
             <CardActions border>

              <Button colored><a href="https://halo.coffee">Live Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ibb.co/yVxHg3F/Screen-Shot-2019-09-25-at-03-31-56.png) center / cover'}} >Wordpress #1</CardTitle>
            <CardText>
              Wordpress fullscreen video page. Portofolio site for my work as a filmmaker and photographer.
            </CardText>
            <CardActions border>

              <Button colored><a href="https://www.kjartanmanvelyan.com">Live Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
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
          <Tab>Rails/React</Tab>
          <Tab>Shopify</Tab>
          <Tab>Wordpress</Tab>
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
