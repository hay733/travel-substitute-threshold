import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';      
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import Results from './Results';
import { render } from '@testing-library/react';

/**
 * WAS THE RESULTS TABLE, BUT NO LONGER BEING USED DUE TO LACK OF 
 * FUNCTIONALITY
 */

/**
 * sets the css styles for the different components
 */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#A2B6E7",
  },
  headerCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "white",
    backgroundColor: "#2E3338",
    fontWeight: 710,
    fontSize: 23,
    borderColor: "#1E2124",
    borderBottomWidth: "1px",
  },
  tableCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "#1E2124",
    fontWeight: 700,
    fontSize: 19,
    borderColor: "#1E2124",
    borderBottomWidth: "1px",
  },
  result: {
    fontFamily: "Open Sans, sans-serif", 
    fontWeight: 700,
    fontSize: 22,
    borderColor: "#1E2124",
    borderBottomWidth: "1px",
    color: "white",
    backgroundColor: "#2E3338",
  },
  mainWords: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    fontSize: "40px",
    margin: "25px",
    textAlign: "center",
    color: "#1E2124",
  },
});

/**
 * ENUMs for vr, tel, and f2f
 */
 const VR = "Virtual Reality";
 const F2F = "Face-to-Face";
 const TELE = "Teleconference";


/**
 * default values for the recommendation col
 * TODO: DEFAULTS TO HIGH, NEED TO IMPLEMENT
 * DEFAULT VALS BASED OFF OF QUIZ
 */
 var eng_rec = F2F;
 var know_rec = F2F;
 var mw_rec = F2F;
 var rapp_rec = F2F;
 var ssa_rec = F2F;
 var trust_rec = F2F;
 var us_rec = F2F;
 var cop_rec = F2F;

/**
 * allows us to input values into the table
 * @param {*} constructs the construct being evaluated 
 * @param {*} degree whether the construct is needed to be low/med/high 
 * @param {*} recommendation the type of meeting recommended based off of the degree and construct
 * @returns the data row generated from the categories
 */
function createData(constructs, degree, recommendation, definition) {
  return { constructs, degree, recommendation, definition };
}

/**
 * 
 * @param {*} items 
 * @returns 
 */
function averageResults() {
  var f2f_count = 0;
  var vr_count = 0;
  var tel_count = 0;

  //check each rec (more tedious algorithm but it works)
  if (eng_rec === F2F) f2f_count++;
  else if (eng_rec === TELE) tel_count++;
  else vr_count++;

  if (know_rec === F2F) f2f_count++;
  else if (know_rec === TELE) tel_count++;
  else vr_count++;

  if (mw_rec === F2F) f2f_count++;
  else if (mw_rec === TELE) tel_count++;
  else vr_count++;

  if (rapp_rec === F2F) f2f_count++;
  else if (rapp_rec === TELE) tel_count++;
  else vr_count++;

  if (ssa_rec === F2F) f2f_count++;
  else if (ssa_rec === TELE) tel_count++;
  else vr_count++;

  if (trust_rec === F2F) f2f_count++;
  else if (trust_rec === TELE) tel_count++;
  else vr_count++;

  if (us_rec === F2F) f2f_count++;
  else if (us_rec === TELE) tel_count++;
  else vr_count++;

  if (cop_rec === F2F) f2f_count++;
  else if (cop_rec === TELE) tel_count++;
  else vr_count++;

  //return the largest
  if (f2f_count >= tel_count && f2f_count >= vr_count) return F2F;
  if (tel_count >= f2f_count && tel_count >= vr_count) return TELE;
  return VR;
}

/**
 * creates the table data as constant values
 */
const rows = [
  createData('Engagement', <ToggleButtons />, 'Virtual Reality (XR)', 'Directing one’s attention, acknowledging other participants, and demonstrating a readiness to interact with other participants, whether positively or negatively'),
  createData('Knowledge', <ToggleButtons />, 'Teleconference', 'What participants know about the meeting topic'),
  createData('Mental Workload', <ToggleButtons />, 'Face-to-Face or Teleconference', 'The ease of mental effort that the participants need to expend to carry out the purpose of the meeting without overloading the participant'),
  createData('Performance', <ToggleButtons />, 'Virtual Reality (XR) or Face-to-Face', 'How accurately and efficiently a participant completes the required task(s)'),
  createData('Rapport', <ToggleButtons />, 'Virtual Reality (XR)','A perceived quality of interactions that evokes positive feelings and inspires cooperation and affinity'),
  createData('Shared Situational Awareness', <ToggleButtons />, 'Virtual Reality (XR)', 'The extent to which participants have a commonly understood mental model of a situation (I.e., what is currently happening and what is going to happen)'),
  createData('Trust', <ToggleButtons />, 'Teleconference', '    The intent to accept vulnerability based on positive expectations'),
  createData('Usability', <ToggleButtons />, 'Teleconference or Virtual Reality (XR)', 'The perceived ease of use of the communication tools to the participants'),
];

/**
 * TODO: NOT WORKING RN
 * @param {*} rec the recommendation that needs to be changed
 * @param {*} val the value -> low, med, high that is being changed to 
 */
function handleRecChange(rec, val) {
  //rec not used rn, but will allow for tailored changes
  if(val === "high") {
    if (rec === eng_rec) eng_rec = F2F;
    else if (rec === know_rec) know_rec = F2F;
    else if (rec === mw_rec) mw_rec = F2F;
    else if (rec === rapp_rec) rapp_rec = F2F;
    else if (rec === ssa_rec) ssa_rec = F2F;
    else if (rec === trust_rec) trust_rec = F2F;
    else if (rec === us_rec) us_rec = F2F;
    else if (rec === cop_rec) cop_rec = F2F;
  }
  else if (val === "med") {
    if (rec === eng_rec) eng_rec = VR;
    else if (rec === know_rec) know_rec = VR;
    else if (rec === mw_rec) mw_rec = VR;
    else if (rec === rapp_rec) rapp_rec = VR;
    else if (rec === ssa_rec) ssa_rec = VR;
    else if (rec === trust_rec) trust_rec = VR;
    else if (rec === us_rec) us_rec = VR;
    else if (rec === cop_rec) cop_rec = VR;
  }
  else {
    if (rec === eng_rec) eng_rec = TELE;
    else if (rec === know_rec) know_rec = TELE;
    else if (rec === mw_rec) mw_rec = TELE;
    else if (rec === rapp_rec) rapp_rec = TELE;
    else if (rec === ssa_rec) ssa_rec = TELE;
    else if (rec === trust_rec) trust_rec = TELE;
    else if (rec === us_rec) us_rec = TELE;
    else if (rec === cop_rec) cop_rec = TELE;
  }
}

/**
 * @returns sets the toggle ability for the buttons
 */
function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('high');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
 
  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="low" aria-label="low" OnClick={handleRecChange(know_rec, "low")}>Low</ToggleButton>
      <ToggleButton value="med" aria-label="med" onClick={handleRecChange(know_rec, "med")}>Medium</ToggleButton>
      <ToggleButton value="high" aria-label="high" onClick={handleRecChange(know_rec, "high")}>High</ToggleButton>
    </ToggleButtonGroup>
  );
}

//determine the most often used recommendation
const avResult = averageResults();

/**
 * @returns remders the rows and columns for all the data
 */
function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>              
            <TableCell className={classes.headerCell}>Constructs</TableCell>
            <TableCell align="right" className={classes.headerCell}>Degree Required</TableCell>
            <TableCell align="right" className={classes.headerCell}>Recommendation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableCell} description={row.definition}>
                {row.constructs} &#9432;
                <p hidden='true' class='description'>{row.definition}</p>
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.degree}</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.recommendation}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={8} className={classes.result}/>
            <TableCell colSpan={1} className={classes.result}>We Recommend:</TableCell>
            <TableCell align="right" className={classes.result}>{avResult}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;