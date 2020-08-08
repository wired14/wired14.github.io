import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

class PrivacyPolicy extends Component {
    render() {
        return(
            <div style ={{width: '100%', margin: 'auto'}} className="policy-page-grid">
                <Grid>
                    <Cell col={2}></Cell>
                    <Cell col={8} className="policy-grid">
                        <h3>Privacy Policy</h3>
                        <h6>This policy applies to all information collected 
                            or submitted on Interval Timer – HIIT for iPhone 
                            and any other devices and platforms.</h6>
                        <h4>Information we collect</h4>
                        <h6>Interval Timer – HIIT does not collect any user 
                            information or connect to the internet.</h6>
                        <h4>California Online Privacy Protection Act Compliance</h4>
                        <h6>We comply with the California Online Privacy Protection Act. 
                            We therefore will not distribute your personal information 
                            to outside parties without your consent.</h6>
                        <h4>Children’s Online Privacy Protection Act Compliance</h4>
                        <h6>We never collect or maintain information at our website 
                            from those we actually know are under 13, and no part of 
                            our website is structured to attract anyone under 13.</h6>
                        <h4>Information for European Union Customers</h4>
                        <h6>By using Overcast and providing your information, you authorize 
                            us to collect, use, and store your information outside of the 
                            European Union.</h6>
                        <h4>Your Consent</h4>
                        <h5>By using our site or apps, you consent to our privacy policy.</h5>
                        <h4>Contacting Us</h4>
                        <h6>If you have questions regarding this privacy policy, you may email 
                            daviddirks12@gmail.com. </h6>

                    </Cell>
                    <Cell col={2}></Cell>
                </Grid>
            </div>
        )
    }
}

export default PrivacyPolicy;