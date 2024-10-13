import { CELL_BG_COLOR } from '@/components/BasicSetting/SalaryRange/const';

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

export default function SalaryRangeTableTd({
  bgColor,
  colSpan,
  rowSpan,
  isBold = false,
  styles = '',
  text,
  borderStyle = 'border-none',
}: IProps) {
  const cellClassName = `
    ${CELL_BG_COLOR[bgColor]} p-1 ${borderStyle}
    whitespace-nowrap text-sm ${isBold ? 'font-bold' : ''} 
    ${typeof text === 'number' ? 'text-right' : 'text-center'} ${styles}`;

  return (
    <td colSpan={colSpan} rowSpan={rowSpan} className={cellClassName}>
      {typeof text === 'number' ? text.toLocaleString() : text}
    </td>
  );
}
