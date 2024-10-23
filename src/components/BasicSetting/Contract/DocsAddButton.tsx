import { IconType } from 'react-icons/lib';

interface DocsAddButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
}

function DocsAddButton({ icon: Icon, label, onClick }: DocsAddButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center text-[13px] gap-2 pl-3 py-2 border-[1px] border-gray-300 w-[250px] bg-gray-100 hover:bg-gray-200"
    >
      <Icon />
      {label}
    </button>
  );
}

export default DocsAddButton;
