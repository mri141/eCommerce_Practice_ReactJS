import React from "react";
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <header>
        <nav className="container mx-auto py-5">
          <div className="flex justify-between">
            <a href="/" className="logo">
              <img
                src="https://udvash.com/media/Images/Udvash%20Logo%20PNG.png"
                alt="logo"
                className="w-32"
              />
            </a>
            <button>
              <FiLogOut />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
