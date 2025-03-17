import React, { useId } from "react";

function Select({
  label,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  currrencyDisabled=false,
}) {
  const id = useId();
  return (
    <div className="flex gap-2 items-center py-4">
      <label htmlFor="id" >{label}</label>
      <select
        id={id}
        className="rounded-lg px-0.5 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectedCurrency}
        onChange={(e) => {
          onCurrencyChange && onCurrencyChange(e.target.value);
        }}
        disabled={currrencyDisabled}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {" "}
            {/* key is used to uniquely identify the element in the list and value is used to set the value of the option element . Always remember key while looping through the list of elements bcz it helps in performance optimization // */}
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
