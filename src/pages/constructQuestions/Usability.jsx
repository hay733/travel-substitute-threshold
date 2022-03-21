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
function UsabilityQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, q1a4: false, q1a5: false, // What will you need to access in order to meet the goals of your meeting? 
        q2a1: false, q2a2: false, // Do all participants have access to the necessary equipment for VR/AR?
        q3a1: false, q3a2: false, // Do all participants have access to the necessary equipment for Zoom? 
        q4a1: false, q4a2: false, q4a3: false, // How skilled are the participants at using the Zoom platform?
        q5a1: false, q5a2: false, q5a3: false, // How skilled are the participants at using the AR/VR? 
        q6a1: false, q6a2: false, q6a3: false, // How skilled are most participants at communicating?
        q7a1: false, q7a2: false, q7a3: false, // How much training will the participants need to be up to date with the technologies used? 
        q8a1: false, q8a2: false, q8a3: false, // How easy will it be for most participants to accomplish the task? 
        q9a1: false, q9a2: false, // Do all participants have a reliable broadband connection? 
        q10a1: false, q10a2: false, q10a3: false, q10a4: false, // How feasible is it for participants to travel? 
        q11a1: false, q11a2: false, q11a3: false, q11a4: false, // Can all participants travel? 
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the questions
    const { 
        q1a1, q1a2, q1a3, q1a4, q1a5, // What will you need to access in order to meet the goals of your meeting? 
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

            <Divider textAlign="right" className={divWords}>usability</Divider>
            {/* What will you need to access in order to meet the goals of your meeting? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What will you need to access in order to meet the goals of your meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q1a1} onChange={handleChange} name="q1a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>none </Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a2} onChange={handleChange} name="q1a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>digital documents</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a3} onChange={handleChange} name="q1a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>physical artifacts with no digital representation available</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a4} onChange={handleChange} name="q1a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>virtual artifacts (e.g. CAD Models)</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a5} onChange={handleChange} name="q1a5" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>virtual environments</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* Do all participants have access to the necessary equipment for VR/AR?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Do all participants have access to the necessary equipment for VR/AR? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q2a1" control={<Radio />}
                            label={<Typography className={answerWords}>yes</Typography>}
                        />
                        <FormControlLabel
                            value="q2a2" control={<Radio />}
                            label={<Typography className={answerWords}>no</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* Do all participants have access to the necessary equipment for Zoom?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Do all participants have access to the necessary equipment for Zoom? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q3a1" control={<Radio />}
                            label={<Typography className={answerWords}>yes</Typography>}
                        />
                        <FormControlLabel
                            value="q3a2" control={<Radio />}
                            label={<Typography className={answerWords}>no</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How skilled are the participants at using the Zoom platform?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How skilled are the participants at using the Zoom platform? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q4a1" control={<Radio />}
                            label={<Typography className={answerWords}>no previous experience</Typography>}
                        />
                        <FormControlLabel
                            value="q4a2" control={<Radio />}
                            label={<Typography className={answerWords}>familiar</Typography>}
                        />
                        <FormControlLabel
                            value="q4a3" control={<Radio />}
                            label={<Typography className={answerWords}>experienced</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* //  How skilled are the participants at using the AR/VR?   */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How skilled are the participants at using the AR/VR? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q5a1" control={<Radio />}
                            label={<Typography className={answerWords}>no previous experience</Typography>}
                        />
                        <FormControlLabel
                            value="q5a2" control={<Radio />}
                            label={<Typography className={answerWords}>familiar</Typography>}
                        />
                        <FormControlLabel
                            value="q5a3" control={<Radio />}
                            label={<Typography className={answerWords}>experienced</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How skilled are most participants at communicating? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How skilled are most participants at communicating?</FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q6a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q6a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q6a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How much training will the participants need to be up to date with the technologies used?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How much training will the participants need to be up to date with the technologies used?</FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q7a1" control={<Radio />}
                            label={<Typography className={answerWords}>none</Typography>}
                        />
                        <FormControlLabel
                            value="q7a2" control={<Radio />}
                            label={<Typography className={answerWords}>less than 1 hour</Typography>}
                        />
                        <FormControlLabel
                            value="q7a3" control={<Radio />}
                            label={<Typography className={answerWords}>more than 1 hour</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How easy will it be for most participants to accomplish the task?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How easy will it be for most participants to accomplish the task? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q8a1" control={<Radio />}
                            label={<Typography className={answerWords}>easy</Typography>}
                        />
                        <FormControlLabel
                            value="q8a2" control={<Radio />}
                            label={<Typography className={answerWords}>moderate</Typography>}
                        />
                        <FormControlLabel
                            value="q8a3" control={<Radio />}
                            label={<Typography className={answerWords}>difficult</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* Do all participants have a reliable broadband connection?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Do all participants have a reliable broadband connection? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q9a1" control={<Radio />}
                            label={<Typography className={answerWords}>yes</Typography>}
                        />
                        <FormControlLabel
                            value="q9a2" control={<Radio />}
                            label={<Typography className={answerWords}>no</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How feasible is it for participants to travel?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How feasible is it for participants to travel? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q10a1" control={<Radio />}
                            label={<Typography className={answerWords}>not possible</Typography>}
                        />
                        <FormControlLabel
                            value="q10a2" control={<Radio />}
                            label={<Typography className={answerWords}>low feasibility </Typography>}
                        />
                        <FormControlLabel
                            value="q10a3" control={<Radio />}
                            label={<Typography className={answerWords}>medium feasibility </Typography>}
                        />
                        <FormControlLabel
                            value="q10a4" control={<Radio />}
                            label={<Typography className={answerWords}>high feasibility</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* Can all participants travel?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Can all participants travel? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q11a1" control={<Radio />}
                            label={<Typography className={answerWords}>none</Typography>}
                        />
                        <FormControlLabel
                            value="q11a2" control={<Radio />}
                            label={<Typography className={answerWords}>less than half</Typography>}
                        />
                        <FormControlLabel
                            value="q11a3" control={<Radio />}
                            label={<Typography className={answerWords}>at least half</Typography>}
                        />
                        <FormControlLabel
                            value="q11a4" control={<Radio />}
                            label={<Typography className={answerWords}>all</Typography>}
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

export default UsabilityQuestions;