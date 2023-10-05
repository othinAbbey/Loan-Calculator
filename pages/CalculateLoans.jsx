import React, { useState } from "react";
import LoanCalculator from "@/components/Calculator";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function CalculatorLoan() {
  const inputFields = [
    { name: "Loan Amount", type: "number", label: "Loan Amount", unit: "UGX" },
    {
      name: "Interest Rate",
      type: "text",
      label: "Annual Interest Rate",
      unit: "%",
    },
    {
      name: "Loan Term",
      type: "number",
      label: "Loan Term (Years)",
      unit: "Years",
    },
    {
      name: "Monthly Payment Amount",
      type: "number",
      label: "Monthly Payment Amount",
      unit: "UGX",
    },
    {
      name: "Total Interest Paid Over Loan Term",
      type: "number",
      label: "Total Interest Paid Over Loan Term",
      unit: "UGX",
    },
  ];

  const [inputValues, setInputValues] = useState({
    "Loan Amount": "",
    "Interest Rate": "",
    "Loan Term": "",
    "Monthly Payment Amount": "0", // Default value
    "Total Interest Paid Over Loan Term": "0", // Default value
  });

  const calculateLoan = () => {
    // Get input values
    const loanAmount = parseFloat(inputValues["Loan Amount"]);
    const annualInterestRate = parseFloat(inputValues["Interest Rate"]);
    const loanTermInYears = parseFloat(inputValues["Loan Term"]);

    // Check if input values are valid numbers
    if (
      isNaN(loanAmount) ||
      isNaN(annualInterestRate) ||
      isNaN(loanTermInYears)
    ) {
      // Handle invalid input values here, e.g., show an error message
      console.error("Invalid input values");
      return;
    }

    // Calculate monthly interest rate in decimal form
    const monthlyInterestRate = annualInterestRate / 100 / 12;

    // Calculate number of monthly payments
    const numberOfPayments = loanTermInYears * 12;

    // Calculate monthly payment amount in UGX
    const monthlyPayment =
      (loanAmount * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate total interest paid over the loan term
    const totalInterest = monthlyPayment * numberOfPayments - loanAmount;

    // Update state with results
    setInputValues({
      ...inputValues,
      "Monthly Payment Amount": monthlyPayment.toFixed(2),
      "Total Interest Paid Over Loan Term": totalInterest.toFixed(2),
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the loan calculation function
    calculateLoan();
  };

  return (
    <>
      <Header />
      <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold mb-4">Loan Application</h2>
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <div key={index} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={inputValues[field.name] || ""}
                  onChange={handleInputChange}
                  placeholder={`Enter ${field.name}`}
                  className="appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {field.unit && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500">{field.unit}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white rounded-md px-4 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Calculate Loan
            </button>
          </div>
        </form>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Monthly Payment: UGX {inputValues["Monthly Payment Amount"]}
          </h3>
          <h3 className="text-xl font-semibold">
            Total Interest Paid: UGX{" "}
            {inputValues["Total Interest Paid Over Loan Term"]}
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CalculatorLoan;
