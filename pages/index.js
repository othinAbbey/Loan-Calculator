import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import Main from "../components/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
