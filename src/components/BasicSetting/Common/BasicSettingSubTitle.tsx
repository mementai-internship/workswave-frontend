import { Txt } from '@/components/Common/Txt';

interface IPropsType {
  title: string;
  content: string;
  flexAlign?: string;
  gap?: string;
  titleColor?: string;
  styles?: string;
}

export default function BasicSettingSubTitle({
  title,
  content,
  flexAlign = 'row',
  gap,
  titleColor = 'text-gray-600',
  styles,
}: IPropsType) {
  return (
    <div
      className={`${
        flexAlign === 'row' ? 'flex' : 'flex flex-col'
      } ${gap} text-sm font-semibold whitespace-nowrap ${styles}`}
    >
      <Txt color={titleColor}>{title}</Txt>
      <Txt variant="body2">{content}</Txt>
    </div>
  );
}
