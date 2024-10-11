interface IPropsType {
  title: string;
  content: string;
  flexStyle?: string;
  titleColor?: string;
  styles?: string;
}

export default function BasicSettingSubTitle({
  title,
  content,
  flexStyle,
  titleColor,
  styles,
}: IPropsType) {
  return (
    <div
      className={`${
        flexStyle ? flexStyle : 'flex gap-x-4'
      } text-sm font-semibold whitespace-nowrap ${styles}`}
    >
      <p className={`${titleColor ? titleColor : 'text-gray-600'}`}>{title}</p>
      <p className="">{content}</p>
    </div>
  );
}
