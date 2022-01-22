import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React from 'react'
import QuestionBoxes from './QuestionBoxes';
import { ButtonGroup } from '@mui/material';
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";

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

// function ResultsTable() {
//     const { container, content_container } = useStyles();
//     return(
//         <div className={container}>
//             {/* <div className={content_container} style={{ float: "left", width: "40%", overflowY: "scroll"}}>
//                 <QuestionBoxes />
//             </div> */}
//             <div className={content_container} /**style={{ float: "right", width: "59.5%" }}**/>
//                 <DataTable />
//             </div>
//         </div>
//     );
// }

class Results extends React.Component {
    // state, handleshow and handlehide toggle resultstable, but dont need atm
    // state = {
    //     isActive: false
    // };
    state = {
        isOpen: false,
        title: null,
        description: null
    }
    
    // handleShow = () => {
    //     this.setState({isActive: true});
    //   };
    
    // handleHide = () => {
    //     this.setState({isActive: false});
    // };

    openModal = (e) => {
        console.log(e);
        // Do not show a popup when changing degree buttons
        if (e.target.innerText == 'HIGH' || e.target.innerText == 'MEDIUM' || e.target.innerText == 'LOW') {
            this.setState({isOpen: false});
        }
        else {
            this.title = e.target.innerText;
            this.setState({isOpen: true});
            // var str = e.target.innerHTML;
            // str.replace("=", '');
            // this.description = str.replace(/<[^>]+>/g, '').replace(this.title, '');
        }
        
    }
    closeModal = () => {
        this.setState({isOpen: false});
    }

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Header />
                <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>A teleconferencing software is your best option</h1>
                {/* <br></br> */}
                
                {/* {this.state.isActive ?(
                    <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
                        hide data
                    </Button></div>
                ) : (
                    <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleShow} className={classes.whyButton}>
                        data
                    </Button></div>
                )}
                {this.state.isActive && <ResultsTable />} */}

                {/* <ResultsTable /> */}
                <div className={classes.content_container} style={{ float: "center", width: "100%" }} onClick={this.openModal}>
                    <DataTable/>
                </div>
                <div >
                    <Dialog open={this.state.isOpen} onClose={this.closeModal} maxWidth='md' fullWidth={true}>
                        <Typography margin='10%' align='center'>
                            <h2>{this.title}</h2>
                            <p>{this.definition}</p>
                        </Typography>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Dialog>
                </div>
                <br></br><br></br><br></br>
                {/* <div style={{textAlign: "center", marginBottom: "5%"}}>
                    <a href='/about' classname={classes.mainWords} style={{color: "black", fontSize: 20, fontFamily: "Open Sans, sans-serif"}}>
                        more info
                    </a>
                    <br></br>
                    <a href='/about' classname={classes.mainWords} style={{color: "black", fontSize: 20, fontFamily: "Open Sans, sans-serif"}}>
                        contribute my data anonymously
                    </a>
                </div> */}
                <br></br>
                <div style={{textAlign: "center"}}>
                    <ButtonGroup variant="outlined" aria-label="text button group">
                        <Button href="/about">more info</Button>
                        <Button>anonymously contribute my data</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Results);