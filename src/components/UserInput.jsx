import React, { useState } from 'react'

function UserInput({onChange, userInput}) {
    // const[initInvestment, setInitInvestemnt] = useState(10000);
    // const[annualInvestment, setAnnualInvestment] = useState(1200);
    // const[expectedReturn, setExpectedReturn] = useState(6);
    // const[duration, setDuration] = useState(10);



  return (
    <>
        <div id='user-input'>
            <span className="input-group">
                <label htmlFor="initial-investment">INITIAL INVESTMENT</label>
                <input type="number" name="initial-investment" id="initial-investment" value={userInput.initialInvestment} onChange={(e)=> {onChange('initialInvestment', e.target.value)}} required />
            </span>
            <span className="input-group">
            <label htmlFor="initial-investment">ANNUAL INVESTMENT</label>
            <input type="number" name="annual-investment" id="annual-investment" value={userInput.annualInvestment} onChange={(e)=> {onChange('annualInvestment', e.target.value)}} required/>
            </span>
            <span className="input-group">
            <label htmlFor="initial-investment">EXPECTED RETURN</label>
            <input type="number" name="expected-return" id="expected-return" value={userInput.expectedReturn} onChange={(e)=> {onChange('expectedReturn', e.target.value)}}required/>
            </span>
            <span className="input-group">
            <label htmlFor="initial-investment">DURATION</label>
            <input type="number" name="duration" id="duration" value={userInput.duration} onChange={(e)=> {onChange('duration', e.target.value)}} required/>
            </span>

        </div>
    </>
  )
}

export default UserInput