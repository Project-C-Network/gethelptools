import React from "react";

interface GHTInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const GHTInput: React.FC<GHTInputProps> = ({
  name,
  value,
  onChange,
  placeholder = "Search...",
  type = "text",
}) => {
  return (
    <div className="p-5 overflow-hidden h-[60px] w-[350px] bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex items-center duration-300 group">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-label="Amount input"
        className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
        inputMode="decimal"
        pattern="[0-9]*"
        maxLength={20}
      />
    </div>
  );
};

export default GHTInput;
