import Header from './Header'
import { makeStyles, Button } from "@material-ui/core"
import React from 'react'


/**
 * 
 * @returns the about page, to be deleted so goes directly to the Scottie google site
 */
function About() {
    return(
        <div>
            <Header />
            <h1 style={{marginTop: 100}}>About</h1>
        </div>
    );
}

export default About;