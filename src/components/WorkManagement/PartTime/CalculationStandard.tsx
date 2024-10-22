import * as ToggleGroup from '@radix-ui/react-toggle-group';

export default function CalculationStandard() {
  const toggleGroupItemClasses = `
    flex items-center justify-center
    px-4 py-2 text-sm
    bg-white text-gray-700
    border border-gray-300
    first:rounded-l-md last:rounded-r-md
    hover:bg-gray-100
    focus:outline-none focus:border-blue-500
    data-[state=on]:bg-blue-100 data-[state=on]:text-blue-700 data-[state=on]:border-blue-500
  `;

  return (
    <ToggleGroup.Root
      className="inline-flex rounded-md overflow-hidden"
      type="single"
      defaultValue="center"
      aria-label="계산 기준"
    >
      <ToggleGroup.Item className={toggleGroupItemClasses} value="left" aria-label="Left aligned">
        출/퇴근 기준
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={toggleGroupItemClasses}
        value="center"
        aria-label="right aligned"
      >
        계약서 기준
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
