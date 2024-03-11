import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

let USER_INPUTS = {
  initialInvestment: 10000, 
  annualInvestment: 1200, 
  expectedReturn: 6, 
  duration: 10
};

function App() {
  const [userInputs, setUserInputs] = useState(USER_INPUTS);

  const inputIsValid = userInputs.duration >= 1;

  function inputOnChange (newValue, identifier) {
    setUserInputs(prevUserInput => {
      const updatedInput = {...prevUserInput, [identifier]: +newValue};

      return updatedInput;
    });
  }

  return (
    <>
      <Header />
      <UserInput onEdit={inputOnChange} UserInput={userInputs}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Result input={userInputs}/>}
    </>
  );
}

export default App
