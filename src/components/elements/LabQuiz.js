import React, { useState } from 'react'
import { Collapse, Button } from '@chakra-ui/core';
import MathJax from 'react-mathjax2';
import * as math from 'mathjs';

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
    }

    function changeHandlerOne(event) {
        setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q=Two
    function submitHandlerTwo(event) {
        const eventValue = valueTwo;
        setanswerTwo(eventValue);
        event.preventDefault();

    }

    function changeHandlerTwo(event) {
        setvalueTwo(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Three
    function submitHandlerThree(event) {
        const eventValue = valueThree;
        setanswerThree(eventValue);
        event.preventDefault();

    }

    function changeHandlerThree(event) {
        setvalueThree(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Four
    function submitHandlerFour(event) {
        const eventValue = valueFour;
        setanswerFour(eventValue);
        event.preventDefault();

    }

    function changeHandlerFour(event) {
        setvalueFour(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //For Q-Five
    function submitHandlerFive(event) {
        const eventValue = valueFive;
        setanswerFive(eventValue);
        event.preventDefault();
    }

    function changeHandlerFive(event) {
        setvalueFive(event.target.value); //this function is to bind the user input to state so that we can use it to check answers      
    }

    //for the collapse, each show state for each button
    const [showOne, setShowOne] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);
    const [showFive, setShowFive] = useState(false);

    function handleToggle(questionNumber) {
        if (questionNumber === 1) {
            setShowOne(!showOne);
        } else if (questionNumber === 2) {
            setShowTwo(!showTwo);
        } else if (questionNumber === 3) {
            setShowThree(!showThree);
        } else if (questionNumber === 4) {
            setShowFour(!showFour);
        } else if (questionNumber === 5) {
            setShowFive(!showFive);
        }
    }

    function showCollapse(questionNumber) {

        if (questionNumber === 1) {
            return (               
                showOne
            )
        } else if (questionNumber === 2) {
            return (
                showTwo
            )
        } else if (questionNumber === 3) {
            return (
                showThree
            )
        } else if (questionNumber === 4) {
            return (
                showFour
            )
        } else if (questionNumber === 5) {
            return (
                showFive
            )
        }
    }

    function Answer(questionNumber) {

        let answerState = [answerOne, answerTwo, answerThree, answerFour, answerFive];
        let userAnswer = JSON.parse(answerState[questionNumber - 1]); //convert it to number

        //Create Mathematical Expressions for solutions, order by the question
        const solutionTwo = `{\\large 85 * 0.1 = 8.5~ \\mathrm{mm} = 0.0085~ \\mathrm{m} }`; //needs tex to add space before units

        const solutionThree = `{\\large \\Delta p = \\rho g h  }`;
        const solutionThree_two = `{\\large = 1000~\\mathrm{kg m^{-3}} ~ * ~ 9.81~\\mathrm{ms^{-1}} ~ * ~ 0.0085~m }`;
        const solutionThree_three = `{\\large = 83.39~ \\mathrm{Pa} }`;

        const solutionFour = `{\\large \\rho = 1.205~\\mathrm{kgm^{-3}} }`;

        const solutionFive = `{\\large p_\\mathrm{total} = p_\\mathrm{static} + \\frac{\\rho * v^2}{2} }`;
        const solutionFive_two = `{\\large v = \\sqrt{\\frac{\\Delta p*2}{\\rho}} }`;
        const solutionFive_three = ` {\\large = 11.8~\\mathrm{ms^{-1}} }`;

        //for answers handling and checking
        const solutions = {
            answer: [85.0, 8.5, 83.4, 1.2, 11.8],

            working: [
                <center> Reading off the manometer image gives a value of 85mm</center>,

                <MathJax.Context input='tex'><MathJax.Node>{solutionTwo}</MathJax.Node></MathJax.Context>,

                <center> <MathJax.Context input='tex'><MathJax.Node>{solutionThree}</MathJax.Node></MathJax.Context>
                    <br></br>
                    <MathJax.Context input='tex'><MathJax.Node>{solutionThree_two}</MathJax.Node></MathJax.Context>
                    <br></br>
                    <MathJax.Context input='tex'><MathJax.Node>{solutionThree_three}</MathJax.Node></MathJax.Context>
                </center>,

                <center>There are two ways you can solve this. Either refer to the Data and Formulae Booklet, Table E.16 and approximate to the dry air density at 20°C or use the ideal gas relation to solve. Hence giving:
                <br></br>
                    <MathJax.Context input='tex'><MathJax.Node>{solutionFour}</MathJax.Node></MathJax.Context>
                </center>,

                <center><MathJax.Context input='tex'><MathJax.Node>{solutionFive}</MathJax.Node></MathJax.Context>
                    <br></br>
                    <MathJax.Context input='tex'><MathJax.Node>{solutionFive_two}</MathJax.Node></MathJax.Context>
                    <br></br>
                    <MathJax.Context input='tex'><MathJax.Node>{solutionFive_three}</MathJax.Node></MathJax.Context>
                </center>,
            ],


        }

        if (math.round(userAnswer, 1) === solutions.answer[questionNumber - 1]) { //minus one here because index starts at 1 for easier reading
            return (
                <div>
                    <p style={{color:"#66A40A"}}>Correct!</p>
                    <br></br>
                    <Button style={showSolutionButtonStyle} onClick={() => handleToggle(questionNumber)}>Show solution</Button>
                    <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
                        <br></br>
                        {solutions.working[questionNumber - 1]}
                    </Collapse>
                </div>
            )
        } else {
            return (
                <div>
                    <p style={{color:"#DD2501"}}>Wrong, Try again.</p>
                    <br></br>
                    <Button style={showSolutionButtonStyle} onClick={() => handleToggle(questionNumber)}>Show solution</Button>
                    <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
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
                    <p>2. The manometer is sloped and has a scale factor of 0.1, what is the vertical height? (in mm)</p>
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
                    <p>3. The manometer contains water (density 1000kg/m3). What is the pressure difference has it measured? (in Pa, answer to 3 d.p.)</p>
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
                    <p>4. Given a temperature of 21°C and under atmospheric pressure, estimate the density of air in the wind tunnel to 3 d.p. (in S.I. units).</p>
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
    backgroundColor: "#006EAF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    padding: "1em",
    margin: "1em",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.15)",
    cursor: "pointer",
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
    left: "20vw"
}

const showSolutionButtonStyle = {
    backgroundColor: "#3A3A3A",
    border: "none",
    borderRadius: "4px",
    color: "#FFD545",
    cursor: "pointer"
}

const display = {
    display: "inline-block",
    position: "relative",
    top: "45vh",
    marginTop: "10vh"
}