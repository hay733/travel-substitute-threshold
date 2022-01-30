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
function EngagementCopresenceSSAQuestions() {
    //text styles call
    const { questionWords, answerWords,divWords, warningWords } = useStyles();
    //questions style call
    const classes = themeStyles();
    //creates al the default values for the answers
    const [state, setState] = React.useState({
        share: false, discuss: false, decision: false, teach: false,
        bboss: false, sup: false, client: false, colld: false, colls: false, supv: false, 
        strang: false, aquaint: false, friend: false, cfriend: false, fam: false,
        inter: false, vr: false, ar: false, other: false, none: false,
        passo: false, passc: false, part: false,
        vdiff: false, diff: false, mdiff: false, meas: false, eas: false, veas: false,
        rvdiff: false, rdiff: false, rmdiff: false, rmeas: false, reas: false, rveas: false,
        zero: false, two: false, four: false, seven: false,
        nreal: false, sreal: false, vreal: false, notARVR: false,
        ncam: false, nrcam: false, rcam: false, nottel: false,
        speak: false, lcomms: false, eapub: false, mienv: false, noint: false,
        isOpen: false, title: null
    });
    //handles question box toggle changes
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    //sets the questions
    const { share, discuss, decision, teach, // what is the goal/focus
        bboss, sup, client, colld, colls, supv, // who is other
        strang, aquaint, friend, cfriend, fam, // how well knwo other
        inter, vr, ar, other, none, // what access needed
        passo, passc, part, // degree of part
        vdiff, diff, mdiff, meas, eas, veas, // difficulty of tasks
        rvdiff, rdiff, rmdiff, rmeas, reas, rveas, // diff remembering
        zero, two, four, seven, // num prev meetings
        nreal, sreal, vreal, notARVR, // realistic avatars
        ncam, nrcam, rcam, nottel, // cameras
        speak, lcomms, eapub, mienv, noint, // how interacting
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

            <Divider textAlign="right" className={divWords}>co-presence</Divider>
            {/* how cameras used */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How will cameras be used if online?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={ncam} onChange={handleChange} name="ncam" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>cameras will not be used</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={nrcam} onChange={handleChange} name="nrcam" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>cameras will not be required but may not be used</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rcam} onChange={handleChange} name="rcam" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>cameras are required</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={nottel} onChange={handleChange} name="nottel" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>not using teleconferencing</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* realistic avatars */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">If using VR or AR, how realistic to people are the avatars? </FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={nreal} onChange={handleChange} name="nreal" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>not realistic</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={sreal} onChange={handleChange} name="sreal" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>somewhat realistic</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={vreal} onChange={handleChange} name="vreal" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very realistic</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={notARVR} onChange={handleChange} name="notARVR" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>not using VR/AR</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords} onClick={openModal}>engagement</Divider>
            {/* degree of participation */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What degree of interaction is needed?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={passo} onChange={handleChange} name="passo" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>passive/observation only</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={passc} onChange={handleChange} name="passc" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>passive comments</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={part} onChange={handleChange} name="part" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>participation</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* how users able to interact during meeting */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How will users be able to interact during the meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={speak} onChange={handleChange} name="speak" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>speak</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={lcomms} onChange={handleChange} name="lcomms" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>leave comments</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={eapub} onChange={handleChange} name="eapub" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>edit/annotate meeting materials publicly</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={mienv} onChange={handleChange} name="mienv" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>move and/or interact with environment in AR/VR</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={noint} onChange={handleChange} name="noint" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>there will be no interaction</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            
            <Divider textAlign="right" className={divWords} onClick={openModal}>knowledge</Divider>
            {/* //  What is the goal/focus  */}
            <div className={classes.root}>
                <br></br><br></br><br></br><br></br><br></br>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What is the goal/focus of this meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={share} onChange={handleChange} name="share" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to share information</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={discuss} onChange={handleChange} name="discuss" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to discuss</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={decision} onChange={handleChange} name="decision" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to make a decision</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={teach} onChange={handleChange} name="teach" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>to teach</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* difficulty of tasks */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How difficult is are the tasks to be done in the meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={vdiff} onChange={handleChange} name="vdiff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={diff} onChange={handleChange} name="diff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={mdiff} onChange={handleChange} name="mdiff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={meas} onChange={handleChange} name="meas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately easy </Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={eas} onChange={handleChange} name="eas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>easy</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={veas} onChange={handleChange} name="veas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very easy </Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* difficulty of remembering */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How difficult will it be to remember the content of the meeting?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={rvdiff} onChange={handleChange} name="rvdiff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rdiff} onChange={handleChange} name="rdiff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rmdiff} onChange={handleChange} name="rmdiff" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately difficult</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rmeas} onChange={handleChange} name="rmeas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>moderately easy </Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={reas} onChange={handleChange} name="reas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>easy</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={rveas} onChange={handleChange} name="rveas" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>very easy </Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords} onClick={openModal}>rapport</Divider>
            {/* who is other part */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">Who is the other participant</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={bboss} onChange={handleChange} name="bboss" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Boss's Boss</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={sup} onChange={handleChange} name="sup" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Supervisor/Boss</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={client} onChange={handleChange} name="client" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Client</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={colld} onChange={handleChange} name="colld" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Colleague of a different discipline</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={colls} onChange={handleChange} name="colls" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Colleague of the same discipline</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={supv} onChange={handleChange} name="supv" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Supervisee</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* how well know other */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How well do you know the other person?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={strang} onChange={handleChange} name="strang" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Stranger</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={aquaint} onChange={handleChange} name="aquaint" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Aquaintance</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={friend} onChange={handleChange} name="friend" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Friend</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={cfriend} onChange={handleChange} name="cfriend" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Close Friend</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={fam} onChange={handleChange} name="fam" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>Family</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords} onClick={openModal}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
            {/* prev num meetings */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">How many previous meetings have you had with this person?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={zero} onChange={handleChange} name="zero" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>0-1</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={two} onChange={handleChange} name="two" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>2-3</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={four} onChange={handleChange} name="four" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>4-6</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={seven} onChange={handleChange} name="seven" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>7+</Typography>}
                        />
                    </FormGroup>
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>

            <Divider textAlign="right" className={divWords} onClick={openModal}>usability</Divider>
            {/* what need to access */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What will you need to access?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={inter} onChange={handleChange} name="inter" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>the internet</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={vr} onChange={handleChange} name="vr" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>a VR environment</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={ar} onChange={handleChange} name="ar" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>an AR environment</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={other} onChange={handleChange} name="other" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>other</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox checked={none} onChange={handleChange} name="none" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>none</Typography>}
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

export default EngagementCopresenceSSAQuestions;