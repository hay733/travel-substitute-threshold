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
function PerformanceQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        q1a1: false, q1a2: false, q1a3: false, // How complex is the task (alternately, how many steps does the task include)? 
        q2a1: false, q2a2: false, q2a3: false, q2a4: false, // Has the participant completed a similar task? If so, to what degree?
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the questions
    const { 
        q1a1, q1a2, q1a3, // How complex is the task (alternately, how many steps does the task include)? 
        q2a1, q2a2, q2a3, q2a4, // Has the participant completed a similar task? If so, to what degree?
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

            <Divider textAlign="right" className={divWords}>performance</Divider>
            {/* How complex is the task (alternately, how many steps does the task include)?  */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How complex is the task? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q1a1} onChange={handleChange} name="q1a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>easy</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a2} onChange={handleChange} name="q1a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately complex</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q1a3} onChange={handleChange} name="q1a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>difficult</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* Has the participant completed a similar task? If so, to what degree? */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Has the participant completed a similar task? If so, to what degree?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={q2a1} onChange={handleChange} name="q2a1" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>they have not</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a2} onChange={handleChange} name="q2a2" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>low similarity</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a3} onChange={handleChange} name="q2a3" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderate similarity</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={q2a4} onChange={handleChange} name="q2a4" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>extreme similarity</Typography>}
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

export default PerformanceQuestions;