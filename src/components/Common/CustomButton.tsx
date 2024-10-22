interface ButtonProps {
  label: string;
}

function CustomButton({ label }: ButtonProps) {
  return (
    <button className="flex items-center text-[13px] gap-2 pl-3 py-2 border-[1px] border-gray-300 w-[250px] bg-gray-200">
      {label}
    </button>
  );
}

export default CustomButton;
