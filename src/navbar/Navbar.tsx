import viteLogo from "/vite.svg";
import "./navbar.css";
import Btn from "../reusable/Btn";
import BtnPill from "../reusable/BtnPill";
import { useEffect, useRef, useState } from "react";
import { findLaptopsByTerm } from "../services/laptops.api";
import { LaptopT } from "../types/LaptopT";
const placeholders = ["Asus Rog Strix", "Lenovo Legion", "Asus Zephyrus"];

function Navbar() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    function generatePlaceholder() {
      const randomIndex = Math.floor(Math.random() * placeholders.length);
      if (inputRef.current) {
        inputRef.current.placeholder = placeholders[randomIndex];
      }
    }
    generatePlaceholder();
  }, []);

  function handleSearch() {
    if (inputRef.current) {
      console.log(inputRef.current.value);
      let searchTerm = inputRef.current.value;
      findLaptopsByTerm(searchTerm);
    }
  }
  return (
    <nav>
      <div className="brand">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <p>Gay</p>
      </div>
      <div className="searchbar">
        <div className="searchbarCategory">
          <p>Category</p>
        </div>
        <div className="searchbarField">
          <input type="text" ref={inputRef} />
        </div>
        <Btn onClick={handleSearch}>Search</Btn>
      </div>
      <div className="navend">
        <BtnPill />
      </div>
    </nav>
  );
}

export default Navbar;
