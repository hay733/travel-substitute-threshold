import Header from './Header'
import DataTable from './Table'

import { makeStyles, Button } from "@material-ui/core"
import React from 'react'
import QuestionBoxes from './QuestionBoxes';

const useStyles = makeStyles(() => ({
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
    container: {
        backgroundColor: "#545F66",
        marginLeft: 5,
        width: "99%",
        height: 570,
        display: "inline-block",
        marginTop: 100,
    },
    content_container: {
        backgroundColor: "green",
        // flex: "auto",
        margin: 1,
        // width: "49.8%",
        height: "99.8%",
        // display: "inline-block",
        // marginTop: 100,
    },
}));

function ResultsTable() {
    const { container, content_container } = useStyles();
    return(
        <div className={container}>
            <div className={content_container} style={{ float: "left", width: "40%" }}>
                <QuestionBoxes style={{fontSize: 5}}/>
            </div>
            <div className={content_container} style={{float: "right", width: "59.5%" }}>
                <DataTable />
            </div>
        </div>
    );
}

class Results extends React.Component {
    state = {
        isActive: false
      };
    
      handleHide() {
        if (this.state.isActive) {
            this.setState({
                isActive: false
            });
        }
        else {
            this.setState({
                isActive: true
            });
        }
    };

    render () {
        const { mainWords, whyButton } = useStyles();
        return(
            <div>
                <Header />
                <h1 className={mainWords} style = {{marginTop: "15%"}}>Zoom is your best option</h1>
                <br></br>
                <div style={{textAlign: "center"}}><Button variant="contained" onClick={this.handleHide}/*color="primary"*/ className={whyButton} href="/results">
                    why?
                </Button></div>
                <ResultsTable />
            </div>
        );
    }
}

export default Results;