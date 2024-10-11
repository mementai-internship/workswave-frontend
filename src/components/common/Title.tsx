interface ITitle {
  content: string;
}

export default function Title({ content }: ITitle) {
  return (
    <div className="pt-5 pb-4">
      <div className="text-2xl font-medium">{content}</div>
    </div>
  );
}
