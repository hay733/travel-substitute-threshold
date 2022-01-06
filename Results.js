import Header from './Header'
import DataTable from './Table'

import { makeStyles, withStyles, Button } from "@material-ui/core"
import React, { useEffect, useState } from 'react';
import QuestionBoxes from './QuestionBoxes';
import Modal from 'react-bootstrap/Modal'
//import 'bootstrap/dist/css/bootstrap.min.css';  

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
//             <div className={content_container} style={{ float: "left", width: "40%", overflowY: "scroll"}}>
//                 <QuestionBoxes />
//             </div>
//             <div className={content_container} style={{ float: "right", width: "59.5%" }} onClick={this.openModal}>
//                 <DataTable/>
//             </div>
//         </div> 
//     );
// }
// const displayModal = (e) => {
//     console.log(e.target.textContent);
//     return (
//         <div>
//             <Modal show={true} style={{width: "200px", display: "block", margin: 'auto'}} centered  style={{opacity:1}}>
//                 <Modal.Header>
//                     Title
//                 </Modal.Header>
//                 <Modal.Body>
//                     {/* {e.target.textContent} */}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant='primary'>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
// const { container, content_container } = useStyles();
class Results extends React.Component {
    state = {
        isActive: false,
        isOpen: false,
        title: null
    };
    handleShow = () => {
        this.setState({isActive: true});
    };
    
    handleHide = () => {
        this.setState({isActive: false});
    };

    openModal = (e) => {
        //console.log(e.target.textContent);
        this.title = e.target.textContent;
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
                    <Header />
                    <h1 className={classes.mainWords} style = {{marginTop: "15%"}}>A teleconferencing software is your best option</h1>
                    <br></br>
                    
                    {this.state.isActive ?(
                        <div>
                            <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide} className={classes.whyButton}>
                                hide data
                            </Button></div>
                            <div>
                            <div className={classes.content_container} style={{ float: "left", width: "40%", overflowY: "scroll"}}>
                                <QuestionBoxes />
                            </div>
                            <div className={classes.content_container} style={{ float: "right", width: "59.5%" }} onClick={this.openModal}>
                                <DataTable/>
                            </div>
                        </div>
                    </div>
                    ) : (
                        <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleShow} className={classes.whyButton}>
                            data
                        </Button></div>
                    )}
                    <Modal show={this.state.isOpen} onHide={this.closeModal} style={{width: "200px", display: "block", margin: 'auto'}} centered  style={{opacity:1}}>
                        <Modal.Header>
                            {this.title}
                        </Modal.Header>
                        <Modal.Body>
                            Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant='primary' onClick={this.closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
          </>
        );
    }
}

export default withStyles(styles)(Results);