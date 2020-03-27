import React, { useState } from 'react'
import { Collapse, Button } from '@chakra-ui/core';
import MathJax from 'react-mathjax2'

export default function LabQuiz() {
    //Create state for the quiz
    const [valueOne, setvalueOne] = useState('');
    const [valueTwo, setvalueTwo] = useState('');
    const [valueThree, setvalueThree] = useState('');
    const [valueFour, setvalueFour] = useState('');
    const [valueFive, setvalueFive] = useState('');

    const [answerOne, setanswerOne] = useState(''); //validate if answer is true
    const [answerTwo, setanswerTwo] = useState('');
    const [answerThree, setanswerThree] = useState('');
    const [answerFour, setanswerFour] = useState('');
    const [answerFive, setanswerFive] = useState('');

    function submitHandlerOne(event) {
        const eventValue = valueOne;
        setanswerOne(eventValue);
        event.preventDefault();
        setShow(false);
    }

    function changeHandlerOne(event) {
        setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q=Two
    function submitHandlerTwo(event) {
        const eventValue = valueTwo;
        setanswerTwo(eventValue);
        event.preventDefault();
        setShow(false);
    }

    function changeHandlerTwo(event) {
        setvalueTwo(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Three
    function submitHandlerThree(event) {
        const eventValue = valueThree;
        setanswerThree(eventValue);
        event.preventDefault();
        setShow(false);
    }

    function changeHandlerThree(event) {
        setvalueThree(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Four
    function submitHandlerFour(event) {
        const eventValue = valueFour;
        setanswerFour(eventValue);
        event.preventDefault();
        setShow(false);
    }

    function changeHandlerFour(event) {
        setvalueFour(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Five
    function submitHandlerFive(event) {
        const eventValue = valueFive;
        setanswerFive(eventValue);
        event.preventDefault();
        setShow(false);
    }

    function changeHandlerFive(event) {
        setvalueFive(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //for the collapse
    const [show, setShow] = useState(false);
    
    function handleToggle() {
        setShow(!show);
    } 

    function Answer(questionNumber) {

        let answerState = [answerOne, answerTwo, answerThree, answerFour, answerFive];
        let userAnswer = answerState[questionNumber - 1];

        //Create Mathematical Expressions for solutions, order by the question
        const solutionTwo = `85 * 0.1 = 8.5mm = 0.0085m`;

        const solutionThree = `Delta P = rho g h `;
        const solutionThree_two = `= 1000 kg m^(3) *9.81ms^(-1)*0.0085m`;
        const solutionThree_three = `= 83.39Pa`;

        const solutionFour = `rho = 1.205 kgm^-3`;

        const solutionFive = `P_(Total) = P_(static) + (rho * v^2)/2`;
        const solutionFive_two = `v = sqrt((DeltaP)*2/rho)`;
        const solutionFive_three = ` = 11.8ms^-1`;

        //for answers handling and checking
        const solutions = {
            answer: ["85", "0.0085", "83.39", "1.205", "11.8"],
            
            working:[ 
                <center>Reading off the manometer image gives a value of 85mm</center>, 
                
                <MathJax.Context><MathJax.Node>{solutionTwo}</MathJax.Node></MathJax.Context>, 
            
                <center><MathJax.Context><MathJax.Node>{solutionThree}</MathJax.Node></MathJax.Context>
                <br></br><br></br>
                <MathJax.Context><MathJax.Node>{solutionThree_two}</MathJax.Node></MathJax.Context>
                <br></br><br></br>
                <MathJax.Context><MathJax.Node>{solutionThree_three}</MathJax.Node></MathJax.Context>
                </center>,
                
                <center>Referring to the Data and Formulae Booklet, Table E.16 and approximating to the dry air density at 20°C, 
                <br></br><br></br>
                <MathJax.Context><MathJax.Node>{solutionFour}</MathJax.Node></MathJax.Context>
                </center>,

                <center><MathJax.Context><MathJax.Node>{solutionFive}</MathJax.Node></MathJax.Context>
                <br></br><br></br>
                <MathJax.Context><MathJax.Node>{solutionFive_two}</MathJax.Node></MathJax.Context>
                <br></br><br></br>
                <MathJax.Context><MathJax.Node>{solutionFive_three}</MathJax.Node></MathJax.Context>
                </center>,
            ],
            

        }

        if (userAnswer === solutions.answer[questionNumber - 1]) { //minus one here because index starts at 1 for easier reading
            return (
                <div>
                    <p>Correct!</p>
                    <br></br>
                    <Button style={showSolutionButtonStyle} onClick={handleToggle}>Show solution</Button>
                    <Collapse isOpen={show} marginTop="0.7em">
                        <br></br>
                    {solutions.working[questionNumber - 1]} 
                    </Collapse>
                </div>
            )
        } else {
            return (
                <div>
                    <p>Wrong, Try again.</p>
                    <br></br>
                    <Button style={showSolutionButtonStyle} onClick={handleToggle}>Show solution</Button>
                    <Collapse isOpen={show} marginTop="0.7em">
                        <br></br>
                    {solutions.working[questionNumber - 1]} 
                    </Collapse>
                </div>
            )
        }


    }

    return (
        <div style={display}>
            <div className="secondaryHeaderContainer">
                <div className="secondaryHeader">Quiz</div>
                <p className="textAreaFloating">Answer the following questions based on this image.</p>
                <div>


                </div>
            </div>
            <img style={manometerStyle} src={require("../../assets/manometer.jpg")} /> 

            <div className="quizContainer">
                <div className="quizQuestion">
                    <p>1. What is the reading of the manometer? (Scale in mm)</p>
                    <form onSubmit={submitHandlerOne}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerOne}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>

                    {answerOne ? Answer(1) : null}
                </div>

                <div className="quizQuestion">
                    <p>2. The manometer is sloped and has a scale factor of 0.1, what is the vertical height? (in m)</p>
                    <form onSubmit={submitHandlerTwo}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerTwo}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>
                    {answerTwo ? Answer(2) : null}
                </div>

                <div className="quizQuestion">
                    <p>3. The manometer contains water (density 1000kg/m3). What is the pressure difference has it measured? (in Pa, answer to 2 s.f.)</p>
                    <form onSubmit={submitHandlerThree}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerThree}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>
                    {answerThree ? Answer(3) : null}
                </div>

                <div className="quizQuestion">
                    <p>4. Given a temperature of 21°C, estimate the density of air in the wind tunnel to 3 d.p. (in S.I. units).</p>
                    <form onSubmit={submitHandlerFour}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerFour}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>
                    {answerFour ? Answer(4) : null}
                </div>

                <div className="quizQuestion">
                    <p>5. The manometer is reading the pressure difference from a pitot-static tube facing into an air flow. How fast is the air flowing? (in S.I. units)</p>
                    <form onSubmit={submitHandlerFive}>
                        <input
                            name="answer"
                            type="string"
                            onChange={changeHandlerFive}
                            style={inputBoxStyle}
                        />
                        <input type="submit" value="Check Answer" style={checkButtonStyle} /> <br></br>
                    </form>
                    {answerFive ? Answer(5) : null}
                </div>
            </div>
        </div>
    )
}

const checkButtonStyle = {
    backgroundColor: "#FFD545",
    color: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    padding: "1em",
    margin: "1em",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
    cursor:"pointer",
}

const inputBoxStyle = {
    borderRadius: "4px",
    height: "3em",
    width: "20em",
}

const manometerStyle = {
    maxWidth: "40%",
    height: "auto",
    position: "relative",
    //left: "30vw",
    top: "52vh",
    left:"20vw"
}

const showSolutionButtonStyle = {
    backgroundColor: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    color: "#FFD545",
    cursor:"pointer"
}

const display = {
    display: "inline-block",
    position: "relative",
    top:"45vh",
    marginTop:"10vh"
}