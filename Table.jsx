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
function createData(constructs, degree, recommendation, definition, description) {
  return { constructs, degree, recommendation, definition, description };
}

/**
 * creates the table data as constant values
 */
const rows = [
  createData('Engagement', <ToggleButtons />, 'Virtual Reality (XR)', 
      'The degree of interaction needed for a task to be successful', 
      'The concept of engagement has been associated with behaviors that are in line with a person’s motivation to perform a task (Cannell, Miller, and Oksenberg, 1981; Reeve, Jang, Carrell, Jeon, and; Barch, 2004; Skinner and Belmont, 1993). Within interpersonal interaction, engagement has been conceptualized as the process by which people start, maintain, and end their perceived connection to one another (Sidner, Lee, Kidd, Lesh, and Rich, 2005), and may be indicated by behaviors that reflect positive or negative evaluations of an interaction partner (Tickle-Degnen and Rosenthal, 1990). Two fundamental components of engagement are thus attentional involvement (e.g., to a stimulus or interaction partner) and emotional involvement (that is afforded by sustained attention; Peters, Castellano, and de Freitas, 2009). An important component to engagement is a feeling of connection between two people (i.e., copresence; Nowak and Biocca, 2003), regardless of whether communication is occurring face-to-face or via computer-mediated platforms. For the purposes of the current paper, engagement is defined as directing one’s attention, acknowledging other participants, and demonstrating a readiness to interact with other participants, whether positively or negatively. Note that with this definition, there can be a feeling of presence or a lack of engagement whether in FtF or CMC.'),
  createData('Knowledge', <ToggleButtons />, 'Teleconference', 
      'What participants know about the meeting topic', 
      'Our Knowledge construct is based on the empirical data collected through our experiments.  It is measured by the number of correct answers in a multiple choice questionnaire subjects obtained within our experimental study.'),
  createData('Mental Workload', <ToggleButtons />, 'Face-to-Face or Teleconference', 
      'The ease of mental effort that the participants need to expend to carry out the purpose of the meeting without overloading the participant.', 
      'Mental workload measures whether a given task meets or exceeds the capability of a worker. In addition to considering the requirements of the task and the characteristics of the worker, this measurement also accounts for external factor such as environmental conditions, time constraints, repetitiveness of the given task, and worker fatigue (Hart and Staveland, 1988; Eggemeier, 1988, ISO, 2000). Perspective One: Exclusively focuses on how a worker adapts to a given task. Perspective Two: The results of a relationship between the task and the worker’s skills and resources (Díaz, Rubio, Martín, and Luceño, 2010; Ferrer & Dalmau, 2004; Young et al., 2015). An ideal mental workload would balance the intensity and duration of the effort to successfully complete the task at hand (ISIO, 1991; Pretoriius and Cillers, 2007; Young et al., 2015). The worker should be exerted to their full potential without exceeding their capabilities. If the worker’s capabilities are stretched too thin, their efficiency of completing the task can go down. However, if the worker is underloaded, or not stimulated enough, their completion of the task is at risk of being suboptimal (Young and Stanton, 2002; Wilson & Rajjan, 1995; Young et al., 2015). Mental Workload can be increased or decreased by adding or subtracting additional resources.'),
  createData('Performance', <ToggleButtons />, 'Virtual Reality (XR) or Face-to-Face', 
      'The ability for a person to successfully perform a task', 
      'Our Performance construct is based on the empirical data collected through our experiments.  It is measured by the number of tasks subjects were able to complete successfully within our experimental study.'),
  createData('Rapport', <ToggleButtons />, 'Virtual Reality (XR)', 
      'A relationship defined by a deep sense of empathy and community', 
      'The concept of rapport can be thought of as a harmonious, positive interaction between individuals that evokes feelings of trust and inspires cooperation (e.g., Cappella, 1990). This definition leverages Tickle-Degnen & Rosenthal (1990)’s theoretical conceptualization of rapport which involves three fundamental components: mutual attentiveness, positivity, and coordination. Mutual attentiveness, or the degree to which the interaction partners are focused on or interested in each other, contributes to the formation of a unified, coherent interaction. Positivity involves the affective nature of the interaction, including one’s perception of another’s friendliness and caring. Coordination reflects the synchrony, balance, and harmony of the interaction between the interactants. Related to the concept of rapport are affinity, which reflects a feeling of connection or one’s openness to connection with another person (Nardi, 2005), and common ground, or mutual knowledge, beliefs, and assumptions shared by conversational partners (e.g., Kecskes and Zhang, 2009). Antecedents of affinity include nonverbal behaviors and activities, including touch and shared experiences. Incidental conversation about mundane topics (e.g., the weather, simple jokes, etc.) can sufficiently begin to evoke feelings of affinity (Argyle, 1969). Both affinity and common ground are important for increasing coordination and performance because of their potential to boost the effectiveness of mutual communication between interaction partners (Convertino, Ganoe, Schafer, Yost, and Carroll, 2005).'),
  createData('Shared Situational Awareness', <ToggleButtons />, 'Virtual Reality (XR)', 
      'Multiple people having a common idea about what is happening', 
      'Shared situation awareness is related to the participants’ understanding of the environment. However, Carroll, Rosson, Convertino, and Ganoe (2006) argue that analysing shared mental models is not sufficient for assessing team communication during coordinated activity and that situational awareness must be taken into account. Motivated initially by the design of human interfaces for avionics and flight control systems, the concept of situation awareness emerged in the late 1980’s. The seminal work by Endsley (1988) defines situation awareness (SA) as “the perception of the elements in the environment within a volume of time and space, the comprehension of their meaning, and the projection of their status in the near future”. In the intervening years, SA has become a substantial topic in the general human factors research community with applications as diverse as air traffic control, power systems operation, emergency management and robotic teleoperation for health care, oil and gas exploration, hazardous environments, and mining, among others. SA research has even extended to measure the collaborative performance of teams (Gorman et al., 2006; Salas, et al., 1995). With respect to shared situation awareness (SSA) in teams, the SA of the individuals involved is important. However, some researchers have noted that not only must there be similarity between individual’s SA, but also the individuals’ SA must be accurate (Saner, Bolstad, Gonzalez, and Cuevas, 2009). '),
  createData('Trust', <ToggleButtons />, 'Teleconference', 
      'The intent to accept vulnerability based on positive expectations.', 
      'The concept of trust has received much empirical and theoretical evaluation across disciplines. It has been studied in multiple disciplines and simultaneously defined as an attitude, a personality trait, an expectation, a behavior, a belief, and a pattern of neurological activity (de Visser, 2012).  Trust is often defined as a psychological state comprising the intent to accept vulnerability based on positive expectations and the actions of the trustee (Mayer, Davis, and Schoorman, 1995; Rousseau, Sitkin, Burt, and Camerer, 1998). Trust is thus divisible into two primary dimensions: the intention to accept vulnerability and the maintenance of positive expectations with respect to the outcome. Within human machine teaming, trust has been theorized as having three components: analytical, analogical, and affective trust (Lee and See, 2004). Analytical trust is the result of a calculation of the capabilities of the trustee to perform the task. Analogical trust is related to affinity of trustee to other trusted members, and affective trust describes influences of emotion and affect on the trustee’s perceived trustworthiness. The term trust is distinguishable from the related concept of trustworthiness (Colquitt, Scott, and LePine, 2007). Where trust is considered the conscious intention to rely on another person (and thus assume vulnerability), trustworthiness involves portraying characteristics, such as benevolence and integrity, that can inform an interaction partner’s perception of the risk of assuming that vulnerability. For the purpose of the Communication Objectives Model, trust is defined as the willingness to accept vulnerability by allocating time or other resources to the trustee to achieve team objectives.' + '\n' +
      'Cognitive processes, affective processes, and organizational norms and mechanisms all contribute to the development of interpersonal trust (McAllister, 1995). Cognitive trust is associated with one’s evaluation of another person’s competency and reliability, and these evaluations are informed by the success of prior interactions as well as the extent to which the parties can be considered in-group members. In contrast, affective trust is related to the emotional bonds that exist between individuals. Precursors to affective trust include behavior that is self-initiated and behavior that demonstrates concern for another rather than self-interest. Relatedly, organizational citizenship behavior can be conceptualized as altruistic behavior that provides assistance outside of one’s own role (Organ, 1997). Expectations of a continued relationship, flexibility to make adaptations, proactive information exchange, and encouragement of self-control are antecedents of trust (Aulakh, Kotabe, & Sahay, 1996).' + '\n' +
      'Specifically, the verbal and non-verbal correlates of trust-building strategies are much more difficult to both present and observe when using video conferencing platforms (Bordia, 1997). Theories with respect to social presence (e.g., Gunawardena, 1995; Short, Williams, & Christie, 1976; Jarvenpaa and Leidner, 1998) and media richness (Daft, Lengel, & Trevino, 1987) suggest that the lack of communication cues available hinders the development of trust between parties. However, despite starting off at a disadvantage compared to FtF contexts, trust in computer-mediated contexts improves when there is a long enough interaction period (Wilson, Strauss, & McEvily; 2006). Additionally, platforms that provide audio and/or audio-visual modalities serve to benefit social presence and the development of interpersonal trust (Bente, Rüggenberg, Krämer, & Eschenburg, 2008).'),
  createData('Usability', <ToggleButtons />, 'Teleconference or Virtual Reality (XR)', 
      'The perceived ease of use of the communication tools to the participants. ', 
      'We utilize <SUS?/modified SUS? Our own questionnaires> in our experiment design to collect empirical data regarding usability'),
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
                <br></br>
                <br></br>
                {row.definition}
                <p hidden='true' class='description'>{row.description}</p>
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