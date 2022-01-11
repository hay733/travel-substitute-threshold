import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';             

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

function createData(categories, rate, original, description) {
  return { categories, rate, original, description };
}

const rows = [
  createData('Mental Workload', 15, 85),
  createData('Social Distance', 26, 10),
  createData('Power Difference', 30, 37),
  createData('Rapport/Trust', 35, 100, 'Rapport: A relationship defined by a deep sense of empathy and community' + '\n' + 'Trust: The belief that another person is honest and reliable'),
  createData('Embodiment', 67, 76),
  createData('Engagement', 98, 46, 'The degree of interaction needed for a task to be successful'),
  createData('Agency', 78, 100),
  createData('Artificiality', 53, 90),
];

function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Data Categories</TableCell>
            <TableCell align="right" className={classes.tableCell}>Rate of Success</TableCell>
            <TableCell align="right" className={classes.tableCell}>Your Success Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableCell} description={row.descrption}>
                {row.categories}
                <p id='construct' hidden>{row.description}</p>
              </TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.rate}%</TableCell>
              <TableCell align="right" className={classes.tableCell}>{row.original}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DataTable;