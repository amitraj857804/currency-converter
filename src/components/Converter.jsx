import React, { useState, useEffect } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import InputField from "./InputField";
import Select from "./Select";

function Converter() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [showConverted, setShowConverted] = useState(false);
    const [displayAmount, setDisplayAmount] = useState(0);
    const [displayFrom, setDisplayFrom] = useState("");
    const [displayTo, setDisplayTo] = useState("");

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const convert = () => {
        setConvertedAmount((amount * currencyInfo[to]).toFixed(4));
        setDisplayAmount(amount);
        setDisplayFrom(from);
        setDisplayTo(to);
    };

    const swap = () => {
        setFrom(to);
        setTo(from);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            convert();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [amount, currencyInfo, to]);

    return (
        <div id="converter" className="min-h-screen bg-gradient-to-br from-[#9772FD] to-[#6A4FCF] flex flex-col items-center justify-center p-4 duration-300">
            {/* Description Section */}
            <div className="w-full max-w-4xl bg-white/10 rounded-lg p-6 mb-8 text-center shadow-lg">
                <p className="text-lg text-white font-semibold">
                    Easily convert currencies with our simple and intuitive currency converter tool. 
                    Just enter the amount, select the currencies, and click convert. You can also swap 
                    the currencies with a single click.
                </p>
            </div>

            {/* Converter Section */}
            <div className="w-full max-w-4xl bg-white/20 rounded-lg sm:p-6 shadow-lg">
                <div className="w-full sm:max-w-md mx-auto">
                    <div className="w-full border border-white/30 rounded-lg p-6 bg-white/10 ">
                        <h1 className="w-full text-center font-bold text-white text-2xl pb-4">
                            Currency Converter
                        </h1>
                        <div className="bg-white text-black rounded-lg p-6 shadow-sm">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    convert();
                                    setShowConverted(true);
                                }}
                            >
                                {/* Amount Input */}
                                <InputField
                                   id="startConvert"
                                    label={"Enter Amount"}
                                    amount={amount}
                                    onAmountChange={(amount) => setAmount(amount)}
                                />

                                {/* Currency Selection and Swap Button */}
                                <div className="flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
                                    <div className="w-full sm:w-2/5 flex justify-center">
                                        <Select
                                            label="From"
                                            currencyOptions={options}
                                            onCurrencyChange={(currency) => setFrom(currency)}
                                            selectedCurrency={from}
                                        />
                                    </div>
                                    <div className="w-full sm:w-1/5 flex justify-center items-center">
                                        <button
                                            type="button"
                                            className="border-2 border-white rounded-md bg-blue-600 text-white px-2 py-1 cursor-pointer hover:bg-blue-700 transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                swap();
                                            }}
                                        >
                                            Swap
                                        </button>
                                    </div>
                                    <div className="w-full sm:w-2/5 flex justify-center">
                                        <Select
                                            label="To"
                                            currencyOptions={options}
                                            onCurrencyChange={(currency) => setTo(currency)}
                                            selectedCurrency={to}
                                        />
                                    </div>
                                </div>

                                {/* Converted Amount Display */}
                                {showConverted && (
                                    <div className="w-full text-center pb-4">
                                        <h1 className="text-xl font-semibold text-black/70">{`${displayAmount} ${displayFrom.toUpperCase()} = ${convertedAmount} ${displayTo.toUpperCase()}`}</h1>
                                    </div>
                                )}

                                {/* Convert Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                                >
                                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Converter;