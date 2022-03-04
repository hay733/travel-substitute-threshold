import Header from './Header'
import airscottie from '../airscottie.png'

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
      marginLeft: "37%",
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

/**
 * @returns renders the header + image + message + button
 */
function Citations() {
    const { container, content_container, mainWords, quizButton } = useStyles();

    return (
        <div>
            <Header />
            <body>
                <h1>Citations</h1>
            </body>
        </div>
    );
}

export default Citations;