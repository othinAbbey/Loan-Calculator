import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function LoansPage() {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-semibold mb-4">Loans</h2>
          <p className="text-gray-800">
            Welcome to the Loans page of the Kanzu Loan Application. Here, you
            can find information about the various loan products we offer to our
            customers.
          </p>
          <h3 className="text-lg font-semibold mt-4">Our Loan Products</h3>
          <ul className="list-disc pl-6 text-gray-800">
            <li>Personal Loans</li>
            <li>Business Loans</li>
            <li>Home Loans</li>
            {/* Add more loan products as needed */}
          </ul>
          <h3 className="text-lg font-semibold mt-4">How to Apply</h3>
          <p className="text-gray-800">
            Applying for a loan at Kanzu is easy. Simply visit our{" "}
            <a href="/calculate-loans" className="text-blue-500">
              Loan Calculator
            </a>{" "}
            to estimate your monthly payments, and then fill out our online loan
            application form.
          </p>
          <h3 className="text-lg font-semibold mt-4">Contact Us</h3>
          <p className="text-gray-800">
            If you have any questions or need assistance with our loan products,
            please don't hesitate to{" "}
            <a href="/contact" className="text-blue-500">
              contact our customer support
            </a>{" "}
            for assistance.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoansPage;
