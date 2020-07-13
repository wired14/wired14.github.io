import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/*<img
                            src={require('../images/avatar.png')}
                            alt="avatar"
                            className="avatar-image"
                        />*/}
                        <div className="banner-text">
                            <h1>David Dirks</h1>
                            <h2>Software Engineer</h2>
                        <hr/>
                        <p>
                        C++ | C | Python | Gitlab | Git Bash | Linux/Unix | QT | OOP | SQL Server | Verilog | RSS | React
                        </p>
                        <div className="social-links">
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/dirksdavid/" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-linkedin" aria-hidden="true"/>
                            </a>

                            {/* Github */}
                            <a href="https://github.com/wired14" rel="noopener noreferrer" target="_blank">
                                <i class="fa fa-github-square" aria-hidden="true"/>
                            </a>

                            {/* Youtube */}
                            <a href="https://www.youtube.com/channel/UCzQwEMl-6xV5awv-AVLLb7w?view_as=subscriber" rel="noopener noreferrer" target="_blank">
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