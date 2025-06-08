import GHTButton from "@/components/GHTButton";
import GHTInput from "@/components/GHTInput";
import GHTSelector, { Option } from "@/components/GHTSelector";
import React, { useEffect, useState } from "react";

interface CurrenciesMap {
  [code: string]: string;
}

export const CurrencyConvertorTool: React.FC = () => {
  const [currencies, setCurrencies] = useState<CurrenciesMap>({});
  const [form, setForm] = useState({ amount: "", from: "usd", to: "inr" });
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
    )
      .then((res) => res.json())
      .then(setCurrencies)
      .catch(() => setCurrencies({}));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (name === "amount") {
        return /^\d*\.?\d*$/.test(value) ? { ...prev, [name]: value } : prev;
      }
      return { ...prev, [name]: value };
    });
  };

  const handleConvert = async () => {
    const amountNum = parseFloat(form.amount);
    if (!amountNum || amountNum <= 0) {
      setResult("Please enter a valid amount");
      return;
    }
    try {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${form.from}.json`
      );
      const data = await res.json();
      const rate = data[form.from]?.[form.to];
      if (rate) {
        setResult((amountNum * rate).toFixed(4));
      } else {
        setResult("Unsupported currency");
      }
    } catch (err) {
      setResult("Error fetching data");
    }
  };

  const currencyOptions: Option[] = Object.entries(currencies).map(
    ([code, name]) => ({
      id: code,
      label: `${code.toUpperCase()} — ${name}`,
    })
  );

  return (
    <div className="p-6 font-sans text-gray-800 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">💱 Currency Converter</h2>

      <GHTInput
        name="amount"
        value={form.amount}
        onChange={handleChange}
        placeholder="Enter amount"
      />

      <div className="mt-4 flex flex-col gap-4">
        <label htmlFor="from-currency" className="sr-only">
          From Currency
        </label>

        <GHTSelector
          options={currencyOptions}
          initialSelected={form.from}
          onChange={(id) =>
            handleChange({
              target: { name: "from", value: id },
            } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)
          }
        />

        <label htmlFor="to-currency" className="sr-only">
          To Currency
        </label>
        <GHTSelector
          options={currencyOptions}
          initialSelected={form.to}
          onChange={(id) =>
            handleChange({
              target: { name: "from", value: id },
            } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)
          }
        />

        <div className="flex justify-center w-full">
          <GHTButton label="Convert" onClick={handleConvert} />
        </div>

        {result && (
          <p className="text-lg font-medium mt-2" role="alert">
            {form.amount} {form.from.toUpperCase()} = <strong>{result}</strong>{" "}
            {form.to.toUpperCase()}
          </p>
        )}
      </div>
    </div>
  );
};
