import React from 'react'
import { makeStyles, Typography } from "@material-ui/core"
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'   
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'

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

function QuestionBoxes() {
    const { questionWords, answerWords, warningWords } = useStyles();
    const classes = themeStyles();
    const [state, setState] = React.useState({
        share: false, discuss: false, decision: false, teach: false,
        bboss: false, sup: false, client: false, colld: false, colls: false, supv: false, 
        strang: false, aquaint: false, friend: false, cfriend: false, fam: false,
        inter: false, vr: false, ar: false, other: false, none: false,
        passo: false, passc: false, part: false,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { share, discuss, decision, teach, // what is the goal/focus
        bboss, sup, client, colld, colls, supv, // who is other
        strang, aquaint, friend, cfriend, fam, // how well knwo other
        inter, vr, ar, other, none, // what access needed
        passo, passc, part, // degree of part
    } = state;

    return(
        <div>
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
                    <FormHelperText className={warningWords}>Choose all that apply</FormHelperText>
                </FormControl>
            </div>
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
            {/* degree of participation */}
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel className={questionWords} component="legend">What degree of interaction is needed?</FormLabel>
                    <br></br>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={passo} onChange={handleChange} name="passo" style={{ color: "white" }} />}
                            label={<Typography className={answerWords}>passive/observatiion only</Typography>}
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
        </div>
    );
}

export default QuestionBoxes;