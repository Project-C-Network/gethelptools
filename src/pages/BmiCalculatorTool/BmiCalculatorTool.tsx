import React, { useState } from "react";
import GHTInput from "@/components/GHTInput";
import GHTButton from "@/components/GHTButton";

const getBMIStatus = (bmi: number, age: number): string => {
  if (!bmi || !age || age < 1) return "";

  if (age < 18) {
    if (bmi < 14) return "Underweight (child)";
    if (bmi < 18) return "Normal (child)";
    return "Overweight (child)";
  }

  if (bmi < 16) return "Severe Thinness";
  if (bmi < 17) return "Moderate Thinness";
  if (bmi < 18.5) return "Mild Thinness";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  if (bmi < 35) return "Obese Class I";
  if (bmi < 40) return "Obese Class II";
  return "Obese Class III";
};

const statusColorMap: Record<string, string> = {
  "Severe Thinness": "text-red-600",
  "Moderate Thinness": "text-orange-500",
  "Mild Thinness": "text-yellow-500",
  Normal: "text-green-600",
  Overweight: "text-yellow-600",
  "Obese Class I": "text-orange-600",
  "Obese Class II": "text-red-500",
  "Obese Class III": "text-red-700",
  "Underweight (child)": "text-yellow-600",
  "Normal (child)": "text-green-600",
  "Overweight (child)": "text-orange-600",
};

export const BMICalculatorTool: React.FC = () => {
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
    bmi: null as number | null,
    status: "",
    color: "text-gray-600",
    error: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      error: "",
      bmi: null,
      status: "",
      color: "text-gray-600",
    }));
  };

  const handleCalculate = () => {
    const { age, height, weight } = formData;

    if (!age || !height || !weight) {
      setFormData((prev) => ({
        ...prev,
        error: "⚠️ All fields are required.",
        bmi: null,
        status: "",
        color: "text-gray-600",
      }));
      return;
    }

    const parsedAge = parseInt(age);
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);

    if (
      parsedAge <= 0 ||
      parsedHeight <= 0 ||
      parsedWeight <= 0 ||
      isNaN(parsedAge) ||
      isNaN(parsedHeight) ||
      isNaN(parsedWeight)
    ) {
      setFormData((prev) => ({
        ...prev,
        error: "⚠️ Please enter valid positive numbers.",
        bmi: null,
        status: "",
        color: "text-gray-600",
      }));
      return;
    }

    const heightInMeters = parsedHeight / 100;
    const bmi = +(parsedWeight / (heightInMeters * heightInMeters)).toFixed(2);
    const status = getBMIStatus(bmi, parsedAge);
    const color = statusColorMap[status] || "text-gray-600";

    setFormData((prev) => ({
      ...prev,
      bmi,
      status,
      color,
      error: "",
    }));
  };

  const handleReset = () => {
    setFormData({
      age: "",
      height: "",
      weight: "",
      bmi: null,
      status: "",
      color: "text-gray-600",
      error: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl text-white font-bold mb-4">BMI Calculator</h2>

      <div className="space-y-4">
        <GHTInput
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age (years)"
        />
        <GHTInput
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="Height (cm)"
        />
        <GHTInput
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
        />

        {formData.error && (
          <p className="text-red-500 text-sm text-center">{formData.error}</p>
        )}

        <div className="flex justify-center w-full gap-4">
          <GHTButton
            label="Reset"
            onClick={handleReset}
            btnClassName="bg-gray-300 text-black py-2 rounded-md hover:bg-gray-400 transition"
          />
          <GHTButton
            label="Calculate"
            onClick={handleCalculate}
            isTiles={false}
          />
        </div>

        {formData.bmi && (
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-white">
              Your BMI: {formData.bmi}
            </p>
            <p className={`text-base font-medium mt-2 ${formData.color}`}>
              Status: {formData.status || formData.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
