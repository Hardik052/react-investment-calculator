import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function Results({input}) {
    // console.log(input)
   
    const results =  calculateInvestmentResults(input);
    console.log(results)
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  
  return (
    <>
    <table id='result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {results.map((everyYear)=>{
              
                const totalInterest = everyYear.valueEndOfYear - everyYear.annualInvestment * everyYear.year - initialInvestment ;
                const capitialInvested  = everyYear.valueEndOfYear - totalInterest;

                return(
                    <tr key={everyYear.year}>
                    <td>{everyYear.year}</td>
                    <td>{formatter.format(everyYear.valueEndOfYear)}</td>
                    <td>{formatter.format(everyYear.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(capitialInvested)}</td>
                </tr>

                );

            })}
        </tbody>
    </table>
       
    </>

  )
}

export default Results