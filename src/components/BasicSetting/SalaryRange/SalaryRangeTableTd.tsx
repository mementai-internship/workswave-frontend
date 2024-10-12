import React from 'react';

export type TBgColor = 'gray' | 'white' | 'red' | 'lightGray';

interface IProps {
  bgColor: TBgColor;
  colSpan?: number;
  rowSpan?: number;
  isBold?: boolean;
  styles?: string;
  borderStyle?: string;
  isBoxShadow?: boolean;
  text: string | number;
}

const bgColorMap: Record<TBgColor, string> = {
  gray: 'bg-[#f4f4f4]',
  lightGray: 'bg-gray-10',
  white: 'bg-[#ffffff]',
  red: 'bg-[#FFF2F2]',
};

export default function SalaryRangeTableTd({
  bgColor,
  colSpan,
  rowSpan,
  isBold = false,
  styles,
  text,
  borderStyle = 'border-none',
}: IProps) {
  const isTextNumberType = typeof text === 'number';
  return (
    <td
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`
        ${bgColorMap[bgColor]} p-1 ${borderStyle}
        whitespace-nowrap text-sm ${isBold ? 'font-bold' : ''} 
        ${isTextNumberType ? 'text-right' : 'text-center'} ${styles ? styles : ''}`}
    >
      {isTextNumberType ? text.toLocaleString() : text}
    </td>
  );
}
