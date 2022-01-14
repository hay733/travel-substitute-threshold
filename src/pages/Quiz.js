import Header from './Header'
import { makeStyles, Button } from "@material-ui/core"
import React from 'react'

/**
 * sets the css styles for the different components
 */
const useStyles = makeStyles(() => ({
    quizButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: "20px",
      textTransform: "lowercase",
      marginLeft: "45%",
      color: "#FFFFEE",
      backgroundColor: "#1E2124",
    },
    mainWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "40px",
        textTransform: "lowercase",
        margin: "25px",
        textAlign: "center",
        color: "#1E2124",
    },
    container: {
        // backgroundColor: "#545F66",
        marginLeft: 5,
        width: "99%",
        height: 450,
        marginTop: 100,
        display: "fixed",
        // alignItems: "center",
    },
}));

/**
 * @returns the message + start quiz button
 */
function Quiz() {
    const { container, content_container, mainWords, quizButton } = useStyles();

    return(
        <div>
            <Header />
            <body className={container}>
                <br></br><br></br><br></br><br></br><br></br>
                <h2 className={mainWords}>
                    Find your travel replacement threshold
                </h2>
                <br></br>
                <Button variant="contained" /*color="primary"*/ className={quizButton} href="/questions">
                    Start Quiz
                </Button>
            </body>
        </div>
    );
}

export default Quiz;