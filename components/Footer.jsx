import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <h3 className="text-2xl font-semibold">Kanzu Banking</h3>
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
