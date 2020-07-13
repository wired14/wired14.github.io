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
                        {/*<div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>*/}
                        <h2 style={{paddingTop: '30px'}}>David Dirks</h2>
                        <h4 style={{color: 'grey'}}>Software Engineer</h4>
                        <hr sytle={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            David is a software engineer that lives in Oklahoma City, Oklahoma. In his free time he enjoys running, soccer, gaming, and reading books.
                        </p>
                        <hr sytle={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(316)-213-2372</p>
                        <h5>Email</h5>
                        <p>daviddirks12@gmail.com</p>
                        <h5>Web</h5>
                        <p>daviddirks.net</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="John Brown University"
                            schoolCity="Siloam Springs, AR"
                            schoolMajor="Bachelors of Engineering, Electrical/Computer Concentration"
                            schoolDescription="GPA 3.36/4.0 | ABET Acredited"
                        />
                        <hr sytle={{borderTop: '3px solid #833fb2'}}/>
                        <h2>Experience</h2>
                        <Experience
                            startYear="Jan 2020"
                            endYear="Current"
                            jobName="The Boeing Compnay"
                            jobDescription="Software Engineer II"
                        />
                        <Experience
                            startYear="Oct 2018"
                            endYear="Jan 2020"
                            jobName="The Boeing Company"
                            jobDescription="Systems Engineer II"
                        />
                        <Experience
                            startYear="Jun 2016"
                            endYear="Oct 2018"
                            jobName="Hewlett Packard Enterprise"
                            jobDescription="Electrical Hardware Design Engineer I"
                        />
                        <Experience
                            startYear="May 2015"
                            endYear="Aug 2015"
                            jobName="LK Architecture"
                            jobDescription="Electrical Engineering Intern"
                        />
                        <Experience
                            startYear="May 2014"
                            endYear="Aug 2014"
                            jobName="Bombardier Learjet"
                            jobDescription="Electrical Instrumentation Design Intern"
                        />
                        <hr sytle={{borderTop: '3px solid #833fb2'}}/>
                        <h2>Skills</h2>
                        <Skills 
                            skill="javascript"
                            progress={25}
                        />
                        <Skills 
                            skill="C++"
                            progress={75}
                        />
                        <Skills 
                            skill="QT"
                            progress={50}
                        />
                        <Skills 
                            skill="react"
                            progress={25}
                        />
                        <Skills 
                            skill="git"
                            progress={50}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;