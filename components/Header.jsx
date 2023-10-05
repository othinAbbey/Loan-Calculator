import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const navigation = ["Home", "Loans", "CalculateLoans"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold"> kanzu loan application</h1>
      <div className="lg:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          Menu
        </button>
      </div>
      <nav className={`sm:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="flex space-x-4">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link href={`/${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
