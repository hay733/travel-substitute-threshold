import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';      
import { Button, ButtonGroup } from '@material-ui/core';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Route } from 'react-router-dom'

/**
 * Class for rendering the entire table
 */
class ResultsTable extends React.Component {

    constructor(props) {
        super(props);

        /**
         * the default values for each of the results table slots
         */
        this.state = {
            isOpen: false,
            title: null,
            definition: null,
            data: [
                {
                    "Construct": "Knowledge",
                    "Definition": "What participants know about the meeting topic",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Mental Workload",
                    "Definition": "The ease of mental effort that the participants need to expend to carry out the purpose of the meeting without overloading the participant",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Usability",
                    "Definition": "The perceived ease of use of the communication tools to the participants",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Rapport",
                    "Definition": "A perceived quality of interactions that evokes positive feelings and inspires cooperation and affinity",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Trust",
                    "Definition": "The intent to accept vulnerability based on positive expectations",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Engagement",
                    "Definition": "Directing one’s attention, acknowledging other participants, and demonstrating a readiness to interact with other participants, whether positively or negatively",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Copresence",
                    "Definition": "A perceived feeling of awareness and mutual presence between participants.",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
    
                {
                    "Construct": "Shared Situational Awareness",
                    "Definition": "The extent to which participants have a commonly understood mental model of a situation (I.e., what is currently happening and what is going to happen)",
                    "Recommendation": "Face-to-Face",
                    "Average": "Face-to-Face"
                },
            ]
        };
    }
    /**
     * Closes the popup 
     */
     closeModal = () => {
        this.setState({isOpen: false});
    }
    /**
     * Opens the popup for the construct
     * @param {} e 
     */
    openModal = (e) => {
        // this.title = e.target.innerHTML;
        // console.log(this.title);
        // If the user clicks a button, ah column heading, or a results cell, do NOT open the modal
        if (e.target.innerText == 'LOW' || e.target.innerText == 'MEDIUM' || e.target.innerText == 'HIGH' | e.target.innerText.includes('Virtual Reality (XR)') || e.target.innerText.includes('Teleconference') || e.target.innerHTML.includes('Face-to-Face') || e.target.innerHTML=='Constructs' || e.target.innerHTML=='Degree Required' || e.target.innerHTML=='Recommendation') {
            this.setState({isOpen: false});
        }
        // Otherwise, open modal and display title/definition
        else {
            this.setState({isOpen: true});
            var titleString = e.target.innerHTML;
            this.title = titleString.substring(0, titleString.indexOf('<'));
            var definitionStr = e.target.innerHTML;
            // //descriptionStr = descriptionStr.substring(0, descriptionStr.indexOf('<p>' + 1));
            definitionStr = definitionStr.replace('<br>', '');
            definitionStr = definitionStr.replace('<br>', '');
            definitionStr = definitionStr.replace(this.title, '');
            this.definition = definitionStr.substring(definitionStr.indexOf('>') + 1, definitionStr.lastIndexOf('<'));
            console.log(this.definition);
        }
        // var str = e.target.innerHTML;
        // str.replace("=", '');
        // this.definition = str.replace(/<[^>]+>/g, '');
        // this.definition = substring(e.targt.innerHTML.indexOf('<') + 1);   
    }
    
    /**
     * Sets the Recommendation of that row to virtual reality
     * @param {*} i index of the row
     */
    updateRecVR(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Virtual Reality";
        this.setState({
            todos: prevState,
        });
    };

    /**
     * Sets the Recommendation of that row to f2f
     * @param {*} i index of the row
     */
    updateRecF2F(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Face-to-Face";
        this.setState({
            todos: prevState,
        });
    };

    /**
     * Sets the Recommendation of that row to teleconference
     * @param {*} i index of the row
     */
    updateRecTel(i){
        let prevState = [...this.state.data];
        prevState[i].Recommendation = "Teleconference";
        this.setState({
            todos: prevState,
        });
    };

    /**
     * 
     * @returns a string stating the average recommendation value
     */
    CalcAv() {
        var i, vr, f2f, tel;
        tel = vr = f2f = 0;
        let prevState = [...this.state.data];
        for (i = 0; i < 8; i++) {
            if (prevState[i].Recommendation == "Teleconference") tel++;
            if (prevState[i].Recommendation == "Face-to-Face") f2f++;
            if (prevState[i].Recommendation == "Virtual Reality") vr++;
        }
        if (tel >= vr && tel >= f2f) return "Teleconference";
        if (vr >= tel && vr >= f2f) return "Virtual Reality";
        return "Face-to-Face";
    }

    /**
     * 
     * @returns the data rows in the table, including the low/med/high button group
     */
    tableTable() {
        // const [alignment, setAlignment] = React.useState('high');

        // const handleAlignment = (event, newAlignment) => {
        //     setAlignment(newAlignment);
        // };
        return this.state.data.map((data, index) => {
            const { Construct, Definition, Recommendation } = data
            return (
                <>
                    <TableBody>
                        <TableRow>
                            <TableCell onClick={this.openModal} align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}}>{Construct} &#9432; <br></br><p hidden>{Definition}</p></TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}} key = {Recommendation}>
                                <ButtonGroup >
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecTel(index)}>low</Button>
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecVR(index)}>med</Button>
                                    <Button style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: "15px", color: "#FFFFEE", 
                                    backgroundColor: "#2E3338", textTransform: "lowercase"}} onClick={() => this.updateRecF2F(index)}>high</Button>
                                </ButtonGroup>
                            </TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", color: "#1E2124", backgroundColor: "#A2B6E7",
                                fontWeight: 700, fontSize: 19, borderColor: "#1E2124", borderBottomWidth: "1px"}}>{Recommendation}</TableCell>
                        </TableRow>
                    </TableBody>
                    <Dialog open={this.state.isOpen} onClose={this.closeModal} maxWidth='md' fullWidth={true}>
                        <DialogTitle margin='10%' align='center'>
                            {this.title}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText margin='10%' align='center'>
                                {this.definition}
                                <br></br>
                                <p>Full Construct Description</p>
                            </DialogContentText>
                        </DialogContent>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Dialog>
                    </>
            )
        }) 
    }

    /**
     * 
     * @returns the table header values
     */
    tableHeader() {
        return (
            <TableHead>
                <TableRow>              
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Construct</TableCell>
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Degree Required</TableCell>
                    <TableCell style={{fontFamily: "Open Sans, sans-serif", color: "white", backgroundColor: "#2E3338",
                        fontWeight: 710, fontSize: 23, borderColor: "#1E2124", borderBottomWidth: "1px"}}>Recommendation</TableCell>
                </TableRow>
            </TableHead>
        )
    }
    
    /**
     * 
     * @returns the whole table - headers, body, spanning cells at the bottom
     */
    render() {
        return (
            <div >
                <TableContainer component={Paper}>
                    <Table id='data' aria-label="simple table">
                        {this.tableHeader()}
                        {this.tableTable()}
                        <TableRow>
                            <TableCell rowSpan={8} style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}/>
                            <TableCell colSpan={1} style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}>We Recommend:</TableCell>
                            <TableCell align="middle" style={{fontFamily: "Open Sans, sans-serif", fontWeight: 700, fontSize: 22, borderColor: "#1E2124",
                                borderBottomWidth: "1px", color: "white", backgroundColor: "#2E3338",}}>{this.CalcAv()}</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </div>
         )
    }
}

export default ResultsTable;
