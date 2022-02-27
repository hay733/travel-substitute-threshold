import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';      

import ToggleButtons from './ToggleButtons'  

/**
 * sets the css styles for the different components
 */
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "#A2B6E7",
  },
  tableCell: {
    fontFamily: "Open Sans, sans-serif", 
    color: "#1E2124",
    fontWeight: 700,
    fontSize: 20,
  },

});

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
 * @returns remders the rows and columns for all the data
 */
function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Constructs</TableCell>
            <TableCell align="right" className={classes.tableCell}>Degree Required</TableCell>
            <TableCell align="right" className={classes.tableCell}>Recommendation</TableCell>
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
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;