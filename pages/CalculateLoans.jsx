import React, { useState } from "react";

function CalculatorLoan() {
  const inputFields = [
    { name: "Loan Amount", type: "number", label: "Loan Amount", unit: "UGX" },
    {
      name: "interest",
      type: "text",
      label: "Annual Interest Rate",
      unit: "%",
    },
    { name: "Term", type: "number", label: "Loan Term (Years)", unit: "Years" },
    {
      name: "monthlyPayment",
      type: "number",
      label: "Monthly Payment Amount",
      unit: "UGX",
    },
    {
      name: "totalInterest",
      type: "number",
      label: "Total Interest Paid Over Loan Term",
      unit: "UGX",
    },
  ];

  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Loan Application</h2>
      <form>
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
    </div>
  );
}

export default CalculatorLoan;
