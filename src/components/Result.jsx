import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result ({input}) {
  let results= calculateInvestmentResults(input);  

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.length && results.map((result, index) => {
          const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - input.initialInvestment;
          const investedCapital = input.initialInvestment + result.annualInvestment * result.year;
          return (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )}
        )}
      </tbody>
    </table>
  );
}