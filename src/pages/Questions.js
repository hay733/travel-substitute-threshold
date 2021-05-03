import React from 'react'
import { withStyles, Button } from "@material-ui/core"

import Header from './Header'
import QuestionBoxes from './QuestionBoxes'
import { render } from '@testing-library/react';

const styles = theme => ({
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
});

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <body className={classes.container} style={{ fontFamily: "Open Sans, sans-serif"  }}>
                    <br></br><br></br>
                    <QuestionBoxes />
                    <br></br><br></br>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained" /*color="primary"*/ className={classes.submitButton} href="/results">
                            Submit
                        </Button>
                    </div>
                    <br></br><br></br><br></br><br></br>
                </body>
            </div>
        );
    }
}

export default withStyles(styles)(Questions);