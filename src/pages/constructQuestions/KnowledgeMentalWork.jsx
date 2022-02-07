import React from 'react'
import { makeStyles, Typography, Button } from "@material-ui/core"
import { styled } from '@mui/material/styles';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'   
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@mui/material/Divider';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

/**
 * constant that sets the styling for different types of text
 */
const useStyles = makeStyles(() => ({
    questionWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "30px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
    answerWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "25px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },

    divWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "23px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
    
    warningWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 500,
        fontSize: "20px",
        letterSpacing: 0,
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
}));

/**
 * sets styling for the dividers
 */
const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  /**
   * sets the styling for the question boxes
   */
const themeStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      fontFamily: "Open Sans, sans-serif",
    },
    formControl: {
      margin: theme.spacing(3),
    },
    label: {
        fontFamily: "Open Sans, sans-serif",
        // fontWeight: 700,
        fontSize: "60px",
        // // textTransform: "lowercase",
        // // margin: "25px",
        // // textAlign: "center",
        // color: "#1E2124",
    }
}));


// function SetData(questions, ){
//     if (questions.state.share) 
//     return null;
// }

/**
 * @returns all the rendered questions and answers + dividers
 */
function KnowledgeMentalWorkloadQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates all the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, q1a4: false, q1a5: false, // What is the goal/focus of this meeting?  
        q2a1: false, q2a2: false, q2a3: false, // How difficult will (teaching/decision/discussion) meeting tasks be? 
        q3a1: false, q3a2: false, q3a3: false, // How easy will it be for the participant to remember the content of the meeting?
        q4a1: false, q4a2: false, q4a3: false, // How long will it take most participants to accomplish the goals of the meeting?
        q5a1: false, q5a2: false, q5a3: false, // How knowledgeable are most participants about the meeting topic? 
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the questions
    const { 
        q1a1, q1a2, q1a3, q1a4, q1a5, // What is the goal/focus of this meeting?  
        q2a1, q2a2, q2a3, // How difficult will (teaching/decision/discussion) meeting tasks be? 
        q3a1, q3a2, q3a3, // How easy will it be for the participant to remember the content of the meeting?
        q4a1, q4a2, q4a3, // How long will it take most participants to accomplish the goals of the meeting?
        q5a1, q5a2, q5a3, // How knowledgeable are most participants about the meeting topic? 
    } = state;
    /**
     * Opens the popup of the corresponding table cell
     * NOTE: does not open popup when a "degree" button is clicked
     * @param {*} e 
     */
    const openModal = (e) => {
        state.title = e.target.outerText; 
        setState({isOpen: true});
    }
    /**
     * Closes the popup 
     */
    const closeModal = () => {
        setState({isOpen: false});
    }
    return(
        <Root>
        <div>

            <Divider textAlign="right" className={divWords}>Knowledge</Divider>
            {/* What is the goal/focus of this meeting?   */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What is the goal/focus of this meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q1a1} onChange={handleChange} name="q1a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to be introduced to new people or a new team</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a2} onChange={handleChange} name="q1a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to share information</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a3} onChange={handleChange} name="q1a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to discuss</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a4} onChange={handleChange} name="q1a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to make a decision</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a5} onChange={handleChange} name="q1a5" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to teach</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How difficult will (teaching/decision/discussion) meeting tasks be?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How difficult will meeting tasks be? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q2a1} onChange={handleChange} name="q2a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a2} onChange={handleChange} name="q2a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a3} onChange={handleChange} name="q2a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords}>Mental Workload</Divider>
            {/* How easy will it be for the participant to remember the content of the meeting? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How easy will it be for the participant to remember the content of the meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q3a1} onChange={handleChange} name="q3a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>the information is easy to remember</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q3a2} onChange={handleChange} name="q3a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>they will remember most information without review</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q3a3} onChange={handleChange} name="q3a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>they may need to review most of the information later</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How long will it take most participants to accomplish the goals of the meeting? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How long will it take most participants to accomplish the goals of the meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q4a1} onChange={handleChange} name="q4a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>1-2 hours</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q4a2} onChange={handleChange} name="q4a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>half day (~4 hours)</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q4a3} onChange={handleChange} name="q4a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>1+ days</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* //  How knowledgeable are most participants about the meeting topic?   */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What is the goal/focus of this meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q5a1} onChange={handleChange} name="q5a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>they are new to the topic</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q5a2} onChange={handleChange} name="q5a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>this is a review</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q5a3} onChange={handleChange} name="q5a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>they are experts</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
        </div>
        {/* generates the construct def popup */}
        <Dialog open={state.isOpen} onClose={closeModal} maxWidth='md' fullWidth={true}>
            <DialogTitle margin='10%' align='center'>{state.title}</DialogTitle>
            <DialogContent>
                <DialogContentText margin='10%' align='center'>
                </DialogContentText>
                </DialogContent>
                <Button onClick={closeModal}>Close</Button>
        </Dialog>
        </Root>
    );
}

export default KnowledgeMentalWorkloadQuestions;