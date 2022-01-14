import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import QuestionBoxes from './QuestionBoxes';
import Modal from '@mui/material/Modal';
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { ButtonGroup } from '@mui/material';

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

const styles = theme => ({
    whyButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        fontSize: "20px",
        textTransform: "lowercase",
      //   marginLeft: "45%",
        color: "#FFFFEE",
        backgroundColor: "#1E2124",
        margin: "auto",
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

class Results extends React.Component {
    state = {
        isActive: false,
        isOpen: false,
        title: null, 
        description: null
    };
    handleShow = () => {
        this.setState({isActive: true});
    };
    
    handleHide = () => {
        this.setState({isActive: false});
    };

    openModal = (e, data) => {
        console.log(e);
        this.title = e.target.innerText;
        var str = e.target.innerHTML;
        str.replace("=", '');
        this.description = str.replace(/<[^>]+>/g, '');
        // this.description = substring(e.targt.innerHTML.indexOf('<') + 1);
        this.setState({isOpen: true});
    }
    closeModal = () => {
        this.setState({isOpen: false});
    }
    render () {
        const { classes } = this.props;
        return (
            <>
                <div>
                    {/* Render header and best option */}
                    <Header />
                    <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>A teleconferencing software is your best option</h1>

                    {/* Render the datatable, and have onClick to open popups */}
                    <div className={classes.content_container}  onClick={this.openModal}>
                        <DataTable/>
                    </div>
                        
                    {/* generates the construct def popup */}
                    <Dialog open={this.state.isOpen} onClose={this.closeModal} maxWidth='md' fullWidth={true}>
                        <Typography margin='10%' align='center'>
                            <h2>{this.title}</h2>
                            <p>{this.description}</p>
                        </Typography>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Dialog>
                </div>

                {/* render the "next steps" buttongroup */}
                <div style={{textAlign: "center"}}>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                        <Button href="/about">more info</Button>
                        <Button>anonymously contribute my data</Button>
                    </ButtonGroup>
                </div>
          </>
        );
    }
}

export default withStyles(styles)(Results);