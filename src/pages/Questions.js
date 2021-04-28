import React from 'react'
import { makeStyles, Button } from "@material-ui/core"

import Header from './Header'
import QuestionBoxes from './QuestionBoxes'

const useStyles = makeStyles(() => ({
    submitButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      fontSize: "25px",
      textTransform: "lowercase",
    //   marginLeft: "55%",
      marginLower: "10%",
      color: "#FFFFEE",
      backgroundColor: "#1E2124",
    },
    container: {
        // backgroundColor: "#545F66",
        marginLeft: 150,
        width: "85%",
        height: 500,
        marginTop: 100,
        display: "fixed",
        // alignItems: "center",
    },
}));

function Questions() {
    const { container, submitButton } = useStyles();
    
    return (
        <div>
            <Header />
            <body className={container} style={{ fontFamily: "Open Sans, sans-serif"  }}>
                <br></br><br></br>
                <QuestionBoxes />
                <br></br><br></br>
                <div style={{textAlign: 'center'}}>
                    <Button variant="contained" /*color="primary"*/ className={submitButton} href="/results">
                        Submit
                    </Button>
                </div>
                <br></br><br></br><br></br><br></br>
            </body>
        </div>
    );
}

export default Questions;