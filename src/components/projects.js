import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, IconButton, CardActions, Button, CardMenu, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        React Project #1
                    </CardTitle>
                    <CardText>
                        daviddirks.net
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/wired14/daviddirksnet" rel="noopener noreferrer" target="_blank">
                            <Button colored> Github</Button>
                        </a>
                        <a href="http://www.daviddirks.net" rel="noopener noreferrer" target="_blank">
                            <Button colored>LiveDemo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        iOS Project #1
                    </CardTitle>
                    <CardText>
                        watchOS Timer App
                    </CardText>
                    <CardActions border>
                        <Button colored>Github (in work)</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        iOS Project #2
                    </CardTitle>
                    <CardText>
                        Hyper Video Controller iPhone App
                    </CardText>
                    <CardActions border>
                        <a href="https://www.youtube.com/watch?v=ndGSDthNzOg" rel="noopener noreferrer" target="_blank">
                            <Button colored>Youtube</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        Embedded Project #1
                    </CardTitle>
                    <CardText>
                        Pi Camera Setup
                    </CardText>
                    <CardActions border>
                        <Button colored>Youtube (In Work)</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        Embedded Project #2
                    </CardTitle>
                    <CardText>
                        PS4 DS4 PI Setup
                    </CardText>
                    <CardActions border>
                        <a href="https://www.youtube.com/watch?v=1EYtZC2iVzc" rel="noopener noreferrer" target="_blank">
                            <Button colored>Youtube</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: '10px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>
                        Embedded Project #3
                    </CardTitle>
                    <CardText>
                        Hyper Video Controller Demo
                    </CardText>
                    <CardActions border>
                        <a href="https://www.youtube.com/watch?v=14n17FMulYE" rel="noopener noreferrer" target="_blank">
                            <Button colored>Youtube</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                </div>
            )
        }
    }



    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>iOS</Tab>
                    <Tab>Embedded</Tab>
                </Tabs>
                <section>
                    <Grid className="projects">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;