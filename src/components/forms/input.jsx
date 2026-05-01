"use client";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { id, type = "text", placeholder, required = false, ...rest },
  ref,
) {
    return (
    <Input ref={ref}
      id={id}
       type={type}
      placeholder={placeholder}
       required={required}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...rest}
    />
  );
});


export default Input;