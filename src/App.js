import "./App.css";
import { useState } from "react";

function App() {

  const [correctAnswer, setCorrectAnswer] = useState(NaN);

  function checkAnswer() {
    let answer = document.getElementById("riddle-answer").value;
    if (answer.toLowerCase() === "tell me more about alcohols!") {
      setCorrectAnswer("true");
    } 
    else {
      setCorrectAnswer("false");
    }
  }

  return (
    <div>
      <h1 className="title1">
        Alcohol Functional Group
      </h1>
      <h1 className="title2">
        Fun Facts
      </h1>

        <div className="fun-fact-1">
          <h1 className="fact1-title">The Chameleon</h1>
          <div className="connection">
            <h6 className="connection-text">
              Grade 12 Connection!
            </h6>
          </div>
          <p>
          The OH group can act as both an acid (donating a proton) and a base (accepting a proton), depending on the situation. 
          </p>
          <button className="button1">
            <a href="https://www.masterorganicchemistry.com/2014/10/06/how-to-make-alcohols-more-reactive/" target="blank">
              Learn More
            </a>
          </button>
        </div>

        <div className="fun-fact-2">
          <h1>The Burning Blues</h1>
          <p>
            When some alcohols burn, they produce a blue flame. This is because the hydroxyl group helps break down the alcohol molecule in a way that excites specific electrons, releasing blue light. 
          </p>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/1ZEEuCHdWFA" title="YouTube video" allowFullScreen></iframe>
          </div>
        </div>

        <div className="fun-fact-3">
          <h1 className="riddle-title">The Riddle!</h1>
          <h2>Decipher this statement</h2>
          <h4>(Hint: “berries” is the key and Googling “Vigenere" can help!)</h4>
          <p>Uicc ui epvv rjsmu Ectwlgmw!</p>
          <input className="input" type="text" id="riddle-answer" name="riddle-answer" />
          <button className="button2" onClick={checkAnswer}>
            Check Answer
          </button>
          <div className="correct-answer">
            {correctAnswer === "true" && <p>Sure! Ever wondered why berries are so vibrant? Some of those beautiful colors come from pigments containing hydroxyl groups!</p>}
            {correctAnswer === "false" && <p>Incorrect! Try again!</p>}
          </div>
        </div>
    </div>
  );
}

export default App;
