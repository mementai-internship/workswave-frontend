interface IPropsType {
  title: string;
  content: string;
  flexStyle?: string;
  titleColor?: string;
  classNames?: string;
}

export default function BasicSettingSubTitle({
  title,
  content,
  flexStyle,
  titleColor,
  classNames,
}: IPropsType) {
  return (
    <div
      className={`${
        flexStyle ? flexStyle : 'flex gap-x-4'
      } text-sm font-semibold whitespace-nowrap ${classNames}`}
    >
      <p className={`${titleColor ? titleColor : 'text-gray-600'}`}>{title}</p>
      <p className="">{content}</p>
    </div>
  );
}
