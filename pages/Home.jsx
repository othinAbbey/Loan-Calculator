import Image from "next/image";
import { Cardo, Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const services = [
    {
      service: "Core Banking",
      description:
        "Experience seamless and hassle-free banking services with Kanzu. Our user-friendly core banking system ensures easy access to your accounts and transactions, making your banking experience efficient and convenient.",
    },
    {
      service: "Microfinance Management",
      description:
        "At Kanzu, we specialize in microfinance management solutions. Our comprehensive system helps you efficiently manage your microfinance operations, from member management to loan tracking, ensuring the success and growth of your institution.",
    },
    {
      service: "Custom Digital Solutions",
      description:
        "Kanzu offers tailored digital solutions to meet your unique business needs. Whether you require a custom app, software, or platform, our experts will work closely with you to create a solution that aligns perfectly with your goals.",
    },
    {
      service: "Online Stores",
      description:
        "Simplify your online retail business with Kanzu's online store solutions. We provide e-commerce platforms that enable you to create and manage your online store effortlessly. Reach a wider audience and boost your sales with our user-friendly online store services.",
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
