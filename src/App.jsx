import Header from "./components/Header"
import Results from "./components/Results";
import UserInput from "./components/UserInput"
import { useState } from "react";
function App() {
  
  const[userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
});

const inputIsValid = true ? userInput.duration >=1 : false;


function handleChange(identifier, newValue){
  setUserInput(oldValues => {
      return{
          ...oldValues,
          [identifier]: +newValue
      }
  })

}
  return (
    <>
        <Header />
        <UserInput userInput = {userInput}onChange={handleChange}/>
        {inputIsValid ? <Results input={userInput}/>:<p className="center">Please enter duration greater than 0</p> }
    </>

  )
}

export default App
