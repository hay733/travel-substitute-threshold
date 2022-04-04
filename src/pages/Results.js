import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import QuestionBoxes from './constructQuestions/Usability';
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import { ButtonGroup } from '@mui/material';
import ResultsTable from './TestTable';

/**
 * sets the css styles for the container sizes
 */
const useStyles = makeStyles(() => ({
    container: {
        // backgroundColor: "#545F66", // for testing/sizing
        marginLeft: 5,
        width: "99%",
        height: 570,
        display: "inline-block",
        marginTop: 100,
    },
    content_container: {
        // backgroundColor: "green",  // for testing/sizing
        // flex: "auto",
        margin: 1,
        // width: "49.8%",
        height: "99.8%",
        // display: "inline-block",
        // marginTop: 100,
        scrollbarColor: "blue",
    },
}));

/**
 * sets the css styles for the different components
 */
const styles = theme => ({
    mainWords: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "40px",
        margin: "25px",
        textAlign: "center",
        color: "#1E2124",
    },
    buttonStyles: {
        fontFamily: "Open Sans, sans-serif", 
        color: "#1E2124",
        fontWeight: 700,
        fontSize: 17,
        borderColor: "#25292D",
        borderBottomWidth: "1px",
        textTransform: "lowercase",
      },
});

/**
 * renders the result + table + next steps buttons
 */
class Results extends React.Component {
    //handles the change in state
    state = {
        isActive: false,
        isOpen: false,
        dataContributedPopup: false,
        title: null, 
        definition: null,
        description: null
    };

    //shows the table
    handleShow = () => {
        this.setState({isActive: true});
    };
    
    //hides the table
    handleHide = () => {
        this.setState({isActive: false});
    };

    /**
     * Opens the popup of the corresponding table cell
     * NOTE: does not open popup when a "degree" button is clicked
     * @param {*} e 
     */
    openModal = (e) => {
        //console.log(e.target.innerHTML);
        //this.title = e.target.innerText;
        this.definition = e.target;
        // If the user clicks a button, do NOT open the modal
        if (e.target.innerText == 'LOW' || e.target.innerText == 'MEDIUM' || e.target.innerText == 'HIGH') {
            this.setState({isOpen: false});
        }
        else {
            this.setState({isOpen: true});
            var titleString = e.target.innerHTML;
            this.title = titleString.substring(0, titleString.indexOf('<'));
            var descriptionStr = e.target.innerHTML;
            //descriptionStr = descriptionStr.substring(0, descriptionStr.indexOf('<p>' + 1));
            descriptionStr = descriptionStr.replace('<br>', '');
            descriptionStr = descriptionStr.replace('<br>', '');
            descriptionStr = descriptionStr.replace(this.title, '');
            this.description = descriptionStr.substring(descriptionStr.indexOf('>') + 1, descriptionStr.lastIndexOf('<'));
        }
        // var str = e.target.innerHTML;
        // str.replace("=", '');
        // this.definition = str.replace(/<[^>]+>/g, '');
        // this.definition = substring(e.targt.innerHTML.indexOf('<') + 1);   
    }
    /**
     * Closes the popup 
     */
    closeModal = () => {
        this.setState({isOpen: false});
    }
    /**
     * Contributes the user's data when clicked
     */
    contributeData = () => {
        this.setState({dataContributedPopup: true});
    }
    closeContributeData = () => {
        this.setState({dataContributedPopup: false});
    }
    render () {
        const { classes } = this.props;
        return (
            <>
                <div>
                    {/* Render header and best option */}
                    <Header />
                    <h1 className={classes.mainWords} style = {{marginTop: "10%"}}>Your best option is...</h1>
                    {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}

                    {/* Render the datatable, and have onClick to open popups */}
                    {/* <div className={classes.content_container}  onClick={this.openModal}> */}
                    <div className={classes.content_container}>
                        <ResultsTable/>
                    </div>
                        
                    {/* generates the construct def popup */}
                    <Dialog open={this.state.isOpen} onClose={this.closeModal} maxWidth='md' fullWidth={true}>
                        <DialogTitle margin='10%' align='center'>{this.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText margin='10%' align='center'>
                                {this.description}
                            </DialogContentText>
                        </DialogContent>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Dialog>
                </div>

                {/* render the "next steps" buttongroup */}

                <div style={{textAlign: "center"}} >
                    <ButtonGroup variant="outlined" aria-label="text button group" className={classes.buttonStyles}>
                        <Button className={classes.buttonStyles} href="/about">more info</Button>
                        <Button className={classes.buttonStyles} >anonymously contribute my data</Button>
                    </ButtonGroup>
                </div>
          </>
        );
    }
}

export default withStyles(styles)(Results);