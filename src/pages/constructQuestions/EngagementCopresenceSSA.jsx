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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

/**
 * constant that sets the styling for different types of text
 */
const useStyles = makeStyles(() => ({
    questionWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "27px",
        // textTransform: "lowercase",
        // margin: "25px",
        // textAlign: "center",
        color: "#1E2124",
    },
    answerWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "25px",
        textTransform: "lowercase",
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
function EngagementCopresenceSSAQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, q1a4: false, q1a5: false, q1a6: false, //Select all types of interactions needed 
        q2a1: false, q2a2: false, q2a3: false, //How frequently will the participants be expected to respond to the host of the meeting? 
        q3a1: false, q3a2: false, q3a3: false, q3a4: false, //How much cooperation between participants is required for this meeting? 
        
        q4a1: false, q4a2: false, q4a3: false, //How important is realistic facial representation? 
        q5a1: false, q5a2: false, q5a3: false, //How important is seeing body language? 
        q6a1: false, q6a2: false, q6a3: false, //How focused/attentive are the other participant(s) when you speak? 
        q7a1: false, q7a2: false, q7a3: false, //How focused/attentive are you when the other participant(s) speak? 
        
        q8a1: false, q8a2: false, q8a3: false, //How important is it that you are looking at the same thing at the same time? 
        q9a1: false, q9a2: false, q9a3: false, //How important is it for all participants to comprehend the same concepts at the same time?  
        q10a1: false, q10a2: false, q10a3: false, //How important is it for all participants to be able to predict/make the same projections at the same time? 
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the 'check all that apply' questions
    const { 
        q1a1, q1a2, q1a3, q1a4, q1a5, q1a6, //Select all types of interactions needed 
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

            <Divider textAlign="right" className={divWords}>engagement</Divider>
            {/* Select all types of interactions needed  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Select all types of interactions needed </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q1a1} onChange={handleChange} name="q1a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Passive/observation only</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a2} onChange={handleChange} name="q1a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Passive comments in a chat</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a3} onChange={handleChange} name="q1a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Passive comments on paper</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a4} onChange={handleChange} name="q1a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Verbal discourse  </Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a5} onChange={handleChange} name="q1a5" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Physical participation </Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a6} onChange={handleChange} name="q1a6" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Active Virtual Task Completion </Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* How frequently will the participants be expected to respond to the host of the meeting?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How frequently will the participants be expected to respond to the host of the meeting? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel 
                            value="q2a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low frequency </Typography>} 
                        />
                        <FormControlLabel
                            value="q2a2" control={<Radio />}
                            label={<Typography className={answerWords}>Moderate frequency</Typography>}
                        />
                        <FormControlLabel
                            value="q2a3" control={<Radio />}
                            label={<Typography className={answerWords}>High frequency</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How much cooperation between participants is required for this meeting?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How much cooperation between participants is required for this meeting? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q3a1" control={<Radio />}
                            label={<Typography className={answerWords}>No cooperation needed </Typography>}
                        />
                        <FormControlLabel
                            value="q3a2" control={<Radio />}
                            label={<Typography className={answerWords}>Low cooperation </Typography>}
                        />
                        <FormControlLabel
                            value="q3a3" control={<Radio />}
                            label={<Typography className={answerWords}>Medium cooperation </Typography>}
                        />
                        <FormControlLabel
                            value="q3a4" control={<Radio />}
                            label={<Typography className={answerWords}>High cooperation  </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords} onClick={openModal}>co-presence</Divider>
            {/* How important is realistic facial representation?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How important is realistic facial representation? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q4a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low importance </Typography>}
                        />
                        <FormControlLabel
                            value="q4a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium importance </Typography>}
                        />
                        <FormControlLabel
                            value="q4a3" control={<Radio />}
                            label={<Typography className={answerWords}>High importance </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How important is seeing body language?   */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How important is seeing body language? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q5a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low importance </Typography>}
                        />
                        <FormControlLabel
                            value="q5a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium importance </Typography>}
                        />
                        <FormControlLabel
                            value="q5a3" control={<Radio />}
                            label={<Typography className={answerWords}>High importance </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How focused/attentive are the other participant(s) when you speak?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How focused/attentive are the other participant(s) when you speak? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q6a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low focus </Typography>}
                        />
                        <FormControlLabel
                            value="q6a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium focus </Typography>}
                        />
                        <FormControlLabel
                            value="q6a3" control={<Radio />}
                            label={<Typography className={answerWords}>High focus </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How focused/attentive are you when the other participant(s) speak?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How difficult will it be to remember the content of the meeting?</FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q7a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low focus </Typography>}
                        />
                        <FormControlLabel
                            value="q7a3" control={<Radio />}
                            label={<Typography className={answerWords}>Medium focus </Typography>}
                        />
                        <FormControlLabel
                            value="q7a3" control={<Radio />}
                            label={<Typography className={answerWords}>High focus </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords} onClick={openModal}>shared situational awareness</Divider>
            {/* How important is it that you are looking at the same thing at the same time?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How important is it that you are looking at the same thing at the same time? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q8a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low importance </Typography>}
                        />
                        <FormControlLabel
                            value="q8a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium importance </Typography>}
                        />
                        <FormControlLabel
                            value="q8a3" control={<Radio />}
                            label={<Typography className={answerWords}>High importance </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How important is it for all participants to comprehend the same concepts at the same time?   */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How important is it for all participants to comprehend the same concepts at the same time? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q9a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low importance </Typography>}
                        />
                        <FormControlLabel
                            value="q9a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium importance </Typography>}
                        />
                        <FormControlLabel
                            value="q9a3" control={<Radio />}
                            label={<Typography className={answerWords}>High importance </Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How important is it for all participants to be able to predict/make the same projections at the same time? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How important is it for all participants to be able to predict/make the same projections at the same time? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q10a1" control={<Radio />}
                            label={<Typography className={answerWords}>Low importance </Typography>}
                        />
                        <FormControlLabel
                            value="q10a2" control={<Radio />}
                            label={<Typography className={answerWords}>Medium importance </Typography>}
                        />
                        <FormControlLabel
                            value="q10a3" control={<Radio />}
                            label={<Typography className={answerWords}>High importance </Typography>}
                        />
                    </RadioGroup>
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

export default EngagementCopresenceSSAQuestions;