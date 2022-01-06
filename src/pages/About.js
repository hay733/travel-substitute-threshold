import Header from './Header'
import { makeStyles, Button } from "@material-ui/core"
import React from 'react'

const useStyles = makeStyles(() => ({
    quizButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: "20px",
      textTransform: "lowercase",
      marginLeft: "37%",
      color: "#FFFFEE",
      backgroundColor: "#1E2124",
    },
    mainWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "50px",
        marginTop: "10%",
        textTransform: "lowercase",
        margin: "25px",
        textAlign: "left",
        color: "#1E2124",
    },
    container: {
        // backgroundColor: "#545F66",
        marginLeft: 5,
        width: "99%",
        height: 450,
        display: "inline-block",
        marginTop: 100,
    },
    content_container: {
        // backgroundColor: "green",
        flex: "center",
        margin: 1,
        // width: "49.8%",
        height: "98%",
        // display: "inline-block",
        // marginTop: 100,
    },
}));

function About() {
    const { container, content_container, mainWords, quizButton } = useStyles(); 

    return(
        <div>
            <Header />
            <h1 className={mainWords}>
                travel substitution threshold overview
            </h1>
            <br></br>
        </div>
    );
}

export default About;