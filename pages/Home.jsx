import Image from "next/image";
import { Cardo, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Main from "../components/Main";

export default function Home() {
  const services = [
    {
      service: "Loan Application and Approval:",
      description: "Loan application description lorem",
    },
    {
      service: "Customer Support",
      description: "Customer support description",
    },
    {
      service: "Lender Management",
      description: "Lender management description",
    },
    {
      service: "Loan Tracking:",
      description: "Loan Tracking description",
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
