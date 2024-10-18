import { Txt } from '@/components/Common/Txt';

interface IPropsType {
  title: string;
  content: string;
  flexAlign?: 'row' | 'col';
  gap?: string;
  titleColor?: string;
  styles?: string;
}

export default function BasicSettingSubTitle({
  title,
  content,
  flexAlign = 'row',
  gap,
  titleColor = 'gray-50',
  styles = '',
}: IPropsType) {
  return (
    <div
      className={`${
        flexAlign === 'row' ? 'flex items-center' : 'flex flex-col'
      } ${gap} whitespace-nowrap ${styles}`}
    >
      <Txt color={titleColor}>{title}</Txt>
      <Txt variant="body2">{content}</Txt>
    </div>
  );
}
