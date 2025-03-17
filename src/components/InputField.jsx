import React from "react";
import { useId } from "react";

function InputField({
     label, 
     amount, 
     onAmountChange 
      
    }) {
  const id = useId();
  return (
    <div className="">
      <label htmlFor={id} className="font-semibold text-gray-400">
        {label}
      </label>
      <input
        type="number"
        id={id}
        value={amount}
        onChange={(e) =>
          onAmountChange && onAmountChange(Number(e.target.value))
        }
        className="w-full border-1 rounded-sm p-1"
      />
    </div>
  );
}

export default InputField;
