import React from 'react'
import { makeStyles, Typography, Button } from "@material-ui/core"
import { styled } from '@mui/material/styles';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'   
import FormControlLabel from '@material-ui/core/FormControlLabel'
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
function RapportTrustQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, q1a4: false, // How well do you know the other person(s)? 
        q2a1: false, q2a2: false, q2a3: false, q2a4: false, // How much experience do you have working with this person(s) in the past? 
        q3a1: false, q3a2: false, q3a3: false, q3a4: false, // How would you describe previous interactions with this person(s)?  
        q4a1: false, q4a2: false, q4a3: false, q4a4: false, // How effective is your communication with others? 
        q5a1: false, q5a2: false, q5a3: false, // To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting? 
        q6a1: false, q6a2: false, q6a3: false, // To what extent do you believe that the other meeting participant(s) are competent in general? 
        q7a1: false, q7a2: false, q7a3: false, // To what extent do you believe that the other meeting participant(s) are reliable?  
        q8a1: false, q8a2: false, q8a3: false, // To what extent do you believe that the other meeting participant(s) have your best interests at heart? 
        q9a1: false, q9a2: false, q9a3: false, // To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems? 
        q10a1: false, q10a2: false, q10a3: false, // To what extent do you believe that the other meeting participant(s) would help you with life-related problems? 
        q11a1: false, q11a2: false, q11a3: false, // To what extent do you believe that the participant(s) will feel free to share ideas and concerns? 
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

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

            <Divider textAlign="right" className={divWords}>rapport</Divider>
            {/* How well do you know the other person(s)?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How well do you know the other person(s)? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q1a1" control={<Radio />}
                            label={<Typography className={answerWords}>not at all</Typography>}
                        />
                        <FormControlLabel
                            value="q1a2" control={<Radio />}
                            label={<Typography className={answerWords}>a little</Typography>}
                        />
                        <FormControlLabel
                            value="q1a3" control={<Radio />}
                            label={<Typography className={answerWords}>moderately</Typography>}
                        />
                        <FormControlLabel
                            value="q1a4" control={<Radio />}
                            label={<Typography className={answerWords}>very well</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How much experience do you have working with this person(s) in the past?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How much experience do you have working with this person(s) in the past?  </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q2a1" control={<Radio />}
                            label={<Typography className={answerWords}>none</Typography>}
                        />
                        <FormControlLabel
                            value="q2a2" control={<Radio />}
                            label={<Typography className={answerWords}>low experience</Typography>}
                        />
                        <FormControlLabel
                            value="q2a3" control={<Radio />}
                            label={<Typography className={answerWords}>moderate experience</Typography>}
                        />
                        <FormControlLabel
                            value="q2a4" control={<Radio />}
                            label={<Typography className={answerWords}>high experience</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How would you describe previous interactions with this person(s)?   */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How would you describe previous interactions with this person(s)?  </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q3a1" control={<Radio />}
                            label={<Typography className={answerWords}>no previous interactions</Typography>}
                        />
                        <FormControlLabel
                            value="q3a2" control={<Radio />}
                            label={<Typography className={answerWords}>positively</Typography>}
                        />
                        <FormControlLabel
                            value="q3a3" control={<Radio />}
                            label={<Typography className={answerWords}>neutral</Typography>}
                        />
                        <FormControlLabel
                            value="q3a4" control={<Radio />}
                            label={<Typography className={answerWords}>negatively</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* How effective is your communication with others?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How effective is your communication with others? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q4a1" control={<Radio />}
                            label={<Typography className={answerWords}>not effective at all</Typography>}
                        />
                        <FormControlLabel
                            value="q4a2" control={<Radio />}
                            label={<Typography className={answerWords}>slightly effective</Typography>}
                        />
                        <FormControlLabel
                            value="q4a3" control={<Radio />}
                            label={<Typography className={answerWords}>moderately effective</Typography>}
                        />
                        <FormControlLabel
                            value="q4a4" control={<Radio />}
                            label={<Typography className={answerWords}>highly effective</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            
            <Divider textAlign="right" className={divWords} onClick={openModal}>trust</Divider>
            {/* To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting?   */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the the other meeting participant(s) are competent when it comes to the subject of the meeting? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q5a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q5a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q5a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) are competent in general?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) are competent in general? </FormLabel>
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
            {/* To what extent do you believe that the other meeting participant(s) are reliable?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) are reliable? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q7a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q7a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q7a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) have your best interests at heart?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) have your best interests at heart? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q8a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q8a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q8a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) would help you if you had work-related problems? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q9a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q9a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q9a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* To what extent do you believe that the other meeting participant(s) would help you with life-related problems?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the other meeting participant(s) would help you with life-related problems? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q10a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q10a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q10a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            {/* To what extent do you believe that the participant(s) will feel free to share ideas and concerns?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">To what extent do you believe that the participant(s) will feel free to share ideas and concerns? </FormLabel>
                    <br></br>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                        <FormControlLabel
                            value="q11a1" control={<Radio />}
                            label={<Typography className={answerWords}>low</Typography>}
                        />
                        <FormControlLabel
                            value="q11a2" control={<Radio />}
                            label={<Typography className={answerWords}>medium</Typography>}
                        />
                        <FormControlLabel
                            value="q11a3" control={<Radio />}
                            label={<Typography className={answerWords}>high</Typography>}
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

export default RapportTrustQuestions;