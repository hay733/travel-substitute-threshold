import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

/**
 * the css styles for the components
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
function createData(constructs, degree, recommendation) {
  return { constructs, degree, recommendation };
}

/**
 * creates a button group for low/med/high degree
 */
const buttonGroup = [
  <ButtonGroup>
    <Button>Low</Button>
    <Button>Medium</Button>
    <Button>High</Button>
  </ButtonGroup>,
];

const rows = [
  createData('Engagement', buttonGroup, 10),
  createData('Knowledge', 30, 37),
  createData('Mental Workload', 35, 100),
  createData('Performance', 67, 76),
  createData('Rapport', 98, 46),
  createData('Shared Situational Awareness', 78, 100),
  createData('Trust', 53, 90),
  createData('Usability', 89, 100),
];

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
              <TableCell component="th" scope="row" className={classes.tableCell}>
                {row.constructs}
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