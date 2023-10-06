import Image from "next/image";
import { Cardo, Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      service: "Loan Application and Approval:",
      description:
        "Experience a seamless and hassle-free loan application process with Kanzu. Our user-friendly application system allows you to apply for loans effortlessly. Plus, our efficient approval process ensures you get a quick response",
    },
    {
      service: "Customer Support",
      description:
        "At Kanzu, customer satisfaction is our top priority. Our dedicated customer support team is available to assist you with any inquiries or issues you may have. We're here to provide the assistance and guidance you need.",
    },
    {
      service: "Lender Management",
      description:
        "Managing lenders is made easy with our comprehensive lender management services. Keep track of lender information, transactions, and more. Kanzu simplifies the lender management process, helping you make informed decisions",
    },
    {
      service: "Loans:",
      description:
        "Our loan tracking system empowers you to stay on top of your loan status. Monitor your repayment schedule, outstanding balances, and payment history with ease. Kanzu ensures you have complete visibility into your loans",
    },
  ];

  return (
    <>
      <Header />
      <div className="text-center">
        <h1 className="text-3xl font-semibold mt-6">Our Services</h1>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-500 rounded-lg p-4 shadow-md m-4 w-72 transition-transform transform hover:scale-105 hover:bg-blue-600"
            >
              <h3 className="text-xl font-semibold">{service.service}</h3>
              <p className="mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
