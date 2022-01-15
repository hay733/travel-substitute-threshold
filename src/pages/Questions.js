import React from 'react'
import { withStyles, Button } from "@material-ui/core"
import Header from './Header'
import QuestionBoxes from './QuestionBoxes'
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { render } from '@testing-library/react';

/**
 * css constant styles for different components
 * @param {*} theme 
 * @returns 
 */
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

/**
 * renders the questions and the submit button
 * calls the questionBoxes component which renders all the quiz questions
 */
class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            title: null
        };
    }
    //opens the popup
    openModal = (e, data) => {
        console.log(e);
        this.title = e.target.innerText;
        // var str = e.target.innerHTML;
        // str.replace("=", '');
        // this.description = str.replace(/<[^>]+>/g, '');
        // this.description = substring(e.targt.innerHTML.indexOf('<') + 1); 
        }
    //closes the popup
    closeModal = () => {
        this.setState({isOpen: false});
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