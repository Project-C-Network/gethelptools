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
      <div className="flex items-center justify-center fill-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
        >
          <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
        </svg>
      </div>
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
