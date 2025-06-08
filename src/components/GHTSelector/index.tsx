import { useState, useRef, useEffect } from "react";

export interface Option {
  id: string;
  label: string;
}

interface GHTSelectorProps {
  options: Option[];
  initialSelected?: string;
  onChange?: (selectedId: string) => void;
  className?: string;
}

function GHTSelector({
  options,
  initialSelected,
  onChange,
  className = "",
}: GHTSelectorProps) {
  const [selected, setSelected] = useState<string>(
    initialSelected ?? (options.length > 0 ? options[0].id : "")
  );
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.id === selected)?.label ?? "";

  function handleSelect(id: string) {
    setSelected(id);
    setOpen(false);
    if (onChange) onChange(id);
  }

  return (
    <div
      className={`relative inline-block w-full text-white select-none ${className}`}
      ref={ref}
    >
      <div
        className="bg-gray-800 rounded-md px-3 py-2 flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setOpen(!open);
            e.preventDefault();
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </div>
      {open && (
        <div
          className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg z-50 max-h-60 overflow-auto"
          role="listbox"
          tabIndex={-1}
        >
          {options
            .filter((o) => o.id !== selected)
            .map(({ id, label }) => (
              <div
                key={id}
                className="px-3 py-2 cursor-pointer hover:bg-gray-700 rounded-md"
                role="option"
                tabIndex={0}
                onClick={() => handleSelect(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleSelect(id);
                    e.preventDefault();
                  }
                }}
                aria-selected={false}
              >
                {label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default GHTSelector;
