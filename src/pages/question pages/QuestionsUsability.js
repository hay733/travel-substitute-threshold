import React from 'react'
import { withStyles, Button, StepButton } from "@material-ui/core"
import Header from '../Header'
import UsabilityQuestions from '../constructQuestions/Usability'
import { Step, Stepper, StepConnector, stepConnectorClasses } from "@material-ui/core"
import { styled } from '@mui/material/styles';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { render } from '@testing-library/react';
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
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
    //   marginLower: "15%",
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
    stepper: {
        backgroundColor: "#A2B6E7",
        marginLeft: "-7%",
        color: "black",
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "30px",
        textTransform: "lowercase",
        
    }
});

/**
 * renders the questions and the submit button
 * calls the questionBoxes component which renders all the quiz questions
 */
class QuestionsUsability extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        isOpen: false,
        title: null
    };
    //opens the popup
    openModal = (e) => {
        console.log(e);
        // this.title = e.target.innerText;
        this.setState({isOpen: true});
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
        const { classes, stepper } = this.props;
        return (
            <div>
                <Header />
                <body className={classes.container} style={{ fontFamily: "Open Sans, sans-serif"  }}>
                    <br></br><br></br>
                    <Stepper activeStep={1} nonLinear alternativeLabel className={classes.stepper}>
                        <Step>
                            <StepButton href='/questions-knowledge_mentalWorkload'>knowledge & mental workload</StepButton>
                        </Step>
                        <Step>
                            <StepButton href='/questions-usability'>usability</StepButton>
                        </Step>
                        <Step>
                            <StepButton href='/questions-rapport_trust'>rapport & trust</StepButton>
                        </Step>
                        <Step>
                            <StepButton href='/questions-engagement_copresence_ssa'>engagement, copresence, & shared situational awareness</StepButton>
                        </Step>
                    </Stepper>

                    <UsabilityQuestions onClick={this.openModal}/>
                    <br></br><br></br>
                    

                    <Button className={classes.submitButton} href='/questions-knowledge_mentalWorkload'>
                        Back
                    </Button>
                    <Button className={classes.submitButton} href='/questions-rapport_trust' style={{float: 'right'}}>
                        Next
                    </Button>
                    <br></br><br></br><br></br>
                </body>
            </div>

        );
    }
}

export default withStyles(styles)(QuestionsUsability);