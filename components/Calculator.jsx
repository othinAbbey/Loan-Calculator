// import React, { useState, useEffect } from "react";
// import CalculatorLoan from "@/pages/calculateloans";
// // import LoanCalculator from "./LoanCalculator";
// function LoanCalculator() {
//   const [inputValues, setinputValues] = useState({});
//   const [monthlyPayment, setMonthlyPayment] = useState(0);
//   const [totalInterest, setTotalInterest] = useState(0);

//   useEffect(() => {
//     if (
//       inputValues["Loan Amount"] &&
//       inputValues["Interest Rate"] &&
//       inputValues["Loan Term"]
//     ) {
//       //handling loan calculation
//       const calculateLoan = (inputValues) => {
//         // Perform loan calculation here using input values
//         const loanAmount = parseFloat(inputValues["Loan Amount"]);
//         const annualInterestRate = parseFloat(inputValues["interest"]);
//         const loanTermInYears = parseInt(inputValues["Term"]);

//         //Perform loan calculation logic

//         //Calculating the monthly interest rate as instructed by dividing it by 12
//         const monthlyInterestRate = annualInterestRate / 100 / 12;

//         //converting the loan term to number of months by multiplying it by 12
//         const numberOfPayments = loanTermInYears * 12;

//         //calculate the total interest paid over the loan life time by subtracting the loan amount from the total paymnets
//         const totalInteres = monthlyPayment * numberOfPayments - loanAmount;

//         const monthlyPayment =
//           (loanAmount * monthlyInterestRate) /
//           ((1 - (1 + monthlyInterestRate)) ^ -numberOfPayments);

//         //Updating the states with resulkts
//         setMonthlyPayment(monthlyPayment.toFixed(2));
//         setTotalInterest(totalInterest.toFixed(2));
//       };
//       // Calculate the loan when the component is rendered
//       //   calculateLoan();
//     }
//   }, [inputValues]);
//   return (
//     <div>
//       <h3 className="text-xl font-semibold">
//         Monthly Payment: UGX {monthlyPayment}
//       </h3>
//       <h3 className="text-xl font-semibold">
//         Total Interest Paid: UGX {totalInterest}
//       </h3>
//     </div>
//   );
// }

// export default LoanCalculator;

import React, { useState, useEffect } from "react";
// import CalculatorLoan from "@/pages/calculateloans";

function LoanCalculator() {
  const [inputValues, setInputValues] = useState({});
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    if (
      inputValues["Loan Amount"] &&
      inputValues["Interest Rate"] &&
      inputValues["Loan Term"]
    ) {
      // Perform loan calculation here using input values
      const loanAmount = parseFloat(inputValues["Loan Amount"]);
      const annualInterestRate = parseFloat(inputValues["Interest Rate"]);
      const loanTermInYears = parseInt(inputValues["Loan Term"]);

      // Calculating the monthly interest rate as instructed by dividing it by 12
      const monthlyInterestRate = annualInterestRate / 100 / 12;

      // Converting the loan term to number of months by multiplying it by 12
      const numberOfPayments = loanTermInYears * 12;

      // Calculate the monthly payment using the formula for a fixed-rate mortgage
      const monthlyPayment =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      // Calculate the total interest paid over the life of the loan
      const totalInterestPaid = monthlyPayment * numberOfPayments - loanAmount;

      // Update the states with results
      setMonthlyPayment(monthlyPayment.toFixed(2));
      setTotalInterest(totalInterestPaid.toFixed(2));
    }
  }, [inputValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div>
      <h3 className="text-xl font-semibold">
        Monthly Payment: UGX {monthlyPayment}
      </h3>
      <h3 className="text-xl font-semibold">
        Total Interest Paid: UGX {totalInterest}
      </h3>

      <div>{/* Your input fields and button go here */}</div>
    </div>
  );
}

export default LoanCalculator;
