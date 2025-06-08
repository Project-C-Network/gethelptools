interface GHTButtonProps {
  label: string;
  onClick?: () => void;
  btnClassName?: string;
  labelClassName?: string;
  isTiles?: boolean;
  key?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const GHTButton: React.FC<GHTButtonProps> = ({
  label = "",
  onClick,
  btnClassName = "",
  labelClassName = "",
  isTiles = true,
  key = "",
  style = {},
  disabled = false,
}) => {
  if (!isTiles) {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group ${btnClassName}`}
      >
        {label}
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
        <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
          {label}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${btnClassName} w-32`}
      key={key}
      style={style}
      disabled={disabled}
    >
      <p className={labelClassName}>{label}</p>
    </button>
  );
};

export default GHTButton;
