"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
}, []);


  return (
    <div className="relative">
      
      {/* User Icon */}
      <div
        ref={ref}
        onClick={() => setOpen(!open)}
        className="cursor-pointer py-3"
      >
        <FontAwesomeIcon icon={faUser} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 bg-white shadow-lg rounded-md z-50">
          
          <Link href="/login">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Login
            </p>
          </Link>

          <Link href="/register">
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Register
            </p>
          </Link>

        </div>
      )}
    </div>
  );
}