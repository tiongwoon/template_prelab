import React from "react";

export default function GeneralQuizBox() {
  function handleToggle(questionNumber) {
    if (questionNumber === 1) {
      setShowOne(!showOne);
    } else if (questionNumber === 2) {
      setShowTwo(!showTwo);
    }
  }

  //this is for the worked solution
  function showCollapse(questionNumber) {
    if (questionNumber === 1) {
      return showOne;
    } else if (questionNumber === 2) {
      return showTwo;
    }
  }

  //If need a hint, duplicate for multiple hint
//   const [showHint, setShowHint] = useState(false);
//   const handleToggleHint = () => setShowHint(!showHint);

  //for the answer box. The following is an example for 2 questions
  const [valueOne, setvalueOne] = useState("");
  const [answerOne, setanswerOne] = useState(""); //validate if answer is true

  const [valueTwo, setvalueTwo] = useState("");
  const [answerTwo, setanswerTwo] = useState("");

  function submitHandlerOne(event) {
    const eventValue = valueOne;
    setanswerOne(eventValue);
    event.preventDefault();
  }

  function changeHandlerOne(event) {
    setvalueOne(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  function submitHandlerTwo(event) {
    const eventValue = valueTwo;
    setanswerTwo(eventValue);
    event.preventDefault();
  }

  function changeHandlerTwo(event) {
    setvalueTwo(event.target.value); //this function is to bind the user input to state so that we can use it to check answers
  }

  function Answer(questionNumber) {
    //to store the state of user's answers
    let answerState = [answerOne, answerTwo];
    let userAnswer = JSON.parse(answerState[questionNumber - 1]);

    //the object for answers
    const solutions = {
      answer: [1, 2], //Answer here

      //Array for working solution
      working: [
        <div>Working Text.</div>,

        <div>
          <p>
            Example of writing mathematical notation with LateX. Copy the whole
            code block.
          </p>
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionTwo}</MathJax.Node>
          </MathJax.Context>
          <br></br>Substituting the given values,
          <MathJax.Context input="tex">
            <MathJax.Node>{solutionTwo_two}</MathJax.Node>
          </MathJax.Context>
        </div>,
      ],
    };

    if (
      math.round(userAnswer, 2) <=
        solutions.answer[questionNumber - 1] * 1.25 && //minus one because the index starts from 0
      math.round(userAnswer, 2) >= solutions.answer[questionNumber - 1] / 1.25 //setting a range of 1.25x here to allow for error
    ) {
      return (
        <div>
          <p style={{ color: "#66A40A" }}>Correct!</p>
          <br></br>
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    } else {
      return (
        <div>
          <p style={{ color: "#DD2501" }}>Wrong, Try again.</p>
          <br></br>
          <Button
            style={showSolutionButtonStyle}
            onClick={() => handleToggle(questionNumber)}
          >
            Show solution
          </Button>
          <Collapse isOpen={showCollapse(questionNumber)} marginTop="0.7em">
            <br></br>
            {solutions.working[questionNumber - 1]}
          </Collapse>
        </div>
      );
    }
  }

  return (
    <div>
      <ol>
        <li>
          {/* Uncomment and duplicate if need to include image */}
          {/* <img
            className="tableImage"
            src={require("../../assets/table.jpg")}
            alt="Description for image"
          /> */}
          <br></br>
          <form onSubmit={submitHandlerOne}>
            <label style={{ display: "block", paddingTop: "1em" }}>
              Question One
            </label>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerOne}
              className="quizInputBox"
            />
            <MathJax.Context input="tex">
              <MathJax.Node inline>Units ~~</MathJax.Node>
            </MathJax.Context>
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />{" "}
            <br></br>
          </form>

          {/* If need to provide hint, uncomment the following snippet */}
          {/* <Button
            variantColor="black"
            backgroundColor="#fff"
            cursor="pointer"
            border="none"
            variant="link"
            onClick={handleToggleHint}
          >
            Hint
          </Button>
          <Collapse isOpen={showHint} marginTop="0.7em">
            Text for Hint
          </Collapse> */}

          {answerOne ? Answer(1) : null} 
          <br></br>
        </li>

        <li>
          <form onSubmit={submitHandlerTwo}>
            <label for="answer" style={{ display: "block" }}>
              Second question.
            </label>
            <input
              name="answer"
              type="number"
              step="0.0001"
              onChange={changeHandlerTwo}
              className="quizInputBox"
            />
            <input
              type="submit"
              value="Check Answer"
              className="quizCheckButton"
            />
            <br></br>
          </form>
          {answerTwo ? Answer(2) : null}
        </li>
      </ol>
    </div>
  );
}
