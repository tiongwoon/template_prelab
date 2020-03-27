import React, { useState } from 'react';
import { Collapse, Button } from '@chakra-ui/core';
import MathJax from 'react-mathjax2';


export default function TheoryQuizBox() {

    //for the collapse
    const [showThree, setShowThree] = useState(false);
    const handleToggleThree = () => setShowThree(!showThree);

    const [showHint, setShowHint] = useState(false);
    const handleToggleHint = () => setShowHint(!showHint);

    //for the answer box
    const [valueOne, setvalueOne] = useState('');
    const [result, setresult] = useState(false); //validate if user has answered
    const [answer, setanswer] = useState(''); //validate if answer is true

    function submitHandlerOne(event) {
        const eventValue = valueOne;
        setresult(true);
        setanswer(eventValue);
        event.preventDefault();
    }

    function changeHandlerOne(event) {
        setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    function Answer() {

        const lineOne = `int_0^R rho vec u (vec u * n) 2 pi r dr `;
        const lineTwo = `-F = M_(Out) - M_(In)`;
        const lineThree = ` = 2 pi rho int_0^R [u(r)]^2 r dr - 2/3rho (U_o)^2 pi r`;
        const lineFour =  `M_(Out)`;
        const lineFive = `2*pi*1.225*0.0344-2/3 * 1.225*12^2*pi*0.03`;
        const lineSix = `therefore F_(drag)=0.0675 (3 s.f.)`;

        if (answer === '0.0675') {
            return (
                <div>
                    <p>Correct!</p>
                     <Collapse isOpen={showThree} marginTop="0.7em">
                        Starting from the momentum integral and using annular differential elements,
                        <MathJax.Context>    
                            <MathJax.Node>{lineOne}</MathJax.Node>
                        </MathJax.Context>
                        <br></br><br></br>
                        <MathJax.Context>    
                            <center> <MathJax.Node>{lineTwo}</MathJax.Node></center>
                        </MathJax.Context>
                        <MathJax.Context>    
                            <center> <MathJax.Node>{lineThree}</MathJax.Node></center>
                        </MathJax.Context> 
                        Since we are given the data, we use numerical integral methods to compute, for this solution we will use trapezoid rule to compute 
                         <MathJax.Context> 
                             <MathJax.Node> {lineFour}</MathJax.Node>
                        </MathJax.Context> <br></br>
                        <MathJax.Context> 
                            <center> <MathJax.Node>{lineFive}</MathJax.Node> </center>
                        </MathJax.Context> 
                        <br></br>
                        <MathJax.Context> 
                            <center> <MathJax.Node>{lineSix}</MathJax.Node> </center>
                        </MathJax.Context> 
                </Collapse>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Wrong, Try again.</p>
                     <Button style={showSolutionButtonStyle} onClick={handleToggleThree}>Show Solution</Button>
                     <Collapse isOpen={showThree} marginTop="0.7em">
                     Starting from the momentum integral and using annular differential elements,
                        <MathJax.Context>    
                            <MathJax.Node>{lineOne}</MathJax.Node>
                        </MathJax.Context>
                        <br></br><br></br>
                        <MathJax.Context>    
                            <center> <MathJax.Node>{lineTwo}</MathJax.Node></center>
                        </MathJax.Context>
                        <MathJax.Context>    
                            <center> <MathJax.Node>{lineThree}</MathJax.Node></center>
                        </MathJax.Context> 
                        Since we are given the data, we use numerical integral methods to compute, for this solution we will use trapezoid rule to compute 
                         <MathJax.Context> 
                             <MathJax.Node> {lineFour}</MathJax.Node>
                        </MathJax.Context> <br></br>
                        <MathJax.Context> 
                            <center> <MathJax.Node>{lineFive}</MathJax.Node> </center>
                        </MathJax.Context> 
                        <br></br>
                        <MathJax.Context> 
                            <center> <MathJax.Node>{lineSix}</MathJax.Node> </center>
                        </MathJax.Context> 
                </Collapse>
                </div>
            )
        }


    }

    return (
        <div>
            <div className="textArea">In this section, we will explore some theories required for you to understand the lab.
            
            <br></br>
                Below are 2 questions to help you strengthen your conceptual understanding.
        </div>

            <div style={containerForQuizHeader}>
                <div className="secondaryHeader">Exercises</div>

                <br></br>
                <p className="textAreaFloating">
                1. In this lab, we will be using mass and momentum conservation to derive drag force. You can refer to the content in page XX in ME1 notes to refresh your understanding.
                Please revisit the 'Submarine Question', which is replicated in your previous and current tutorial sheets as below:       
                <br></br>
                <br></br>
                &emsp; a. ME1 Fluid Mechanics 1 Tutorial Sheet 9 Question 2 
                (Please note the difference in frame of reference will result in different representation of wake velocity profile.
                ie. Fixed frame, u is maximum at the axis and zero at r=R, Moving frame with the submarine, u is zero at the axis and maximum at r=R.)
                <br></br>
                <br></br>
                &emsp; b. ME2 Fluid Mechanics 2 Tutorial Sheet 1 Question 3.
                    <br></br>
                    <br></br>
                    <a href="http://bb.imperial.ac.uk" target="_blank" rel="noopener noreferrer"><Button>Go to Blackboard</Button></a>
                    <br></br>
                    <br></br>
                    2. For the example measured wake profile below, estimate the drag on the object assuming atmospheric pressure everywhere.
                    <img style={imageStyle} src={require("../../assets/streamline.jpg")} />
                    <br></br>
                    <img style={tableStyle} src={require("../../assets/table.jpg")} />
                    <br></br>
                    <form onSubmit={submitHandlerOne}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerOne}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>
                    <Button variantColor="#3A3A3A" variant="outline" onClick={handleToggleHint}>Hint</Button>
                    <Collapse isOpen={showHint} marginTop= "0.7em" >
                        How do you sum an integral function?
                    </Collapse>
                    {result ? Answer() : null}

                    <br></br>
                    <br></br>

                </p>

            </div>


        </div>

    )
}

const containerForQuizHeader = {
    position: "relative",
    left: "20vw",
    top: "10vh",
    display: "inline-block",
    width: "70vw",
}

const showSolutionButtonStyle = {
    backgroundColor: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    color: "#FFD545",
    marginTop: "1em",
}

const imageStyle = {
    maxWidth: "70%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "1.5em",
    display: "block",
}

const tableStyle = {
    maxWidth: "30%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block",
}

const checkButtonStyle = {
    backgroundColor: "#FFD545",
    color: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    padding: "1em",
    margin: "1em",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
}

const inputBoxStyle = {
    borderRadius: "4px",
    height: "3em",
    width: "20em",
}