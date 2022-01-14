import Header from './Header'
import { makeStyles, Button } from "@material-ui/core"
import React from 'react'
import { Redirect } from'react-router-dom';


/**
 * 
 * @returns the about page, to be deleted so goes directly to the Scottie google site
 */
class About extends React.Component {
    render() {
        window.open('https://sites.google.com/iastate.edu/scottie/home?authuser=0');
        return (<Redirect to="/" />); //render function should return something
    };
}

export default About;