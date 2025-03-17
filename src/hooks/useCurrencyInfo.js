import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://currency-rate-exchange-api.onrender.com/${currency}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.rates[currency]) {
                    setData(data.rates[currency]);
                } else {
                    console.error("No rates found in the response");
                }
            })
            .catch((error) => {
                console.error("Failed to fetch currency data:", error);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;