import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/*<img
                            src= "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                            alt="avatar"
                            className="avatar-image"
                        />*/}
                        <div className="banner-text">
                            <h1>Software Engineer</h1>
                        <hr/>
                        <p>
                        C++ | C | Python | Gitlab | Git Bash | Linux/Unix | QT | OOP | SQL Server | Verilog | RSS | React
                        </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin" aria-hidden="true"/>
                            </a>

                            {/* Github */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-youtube" aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default LandingPage;