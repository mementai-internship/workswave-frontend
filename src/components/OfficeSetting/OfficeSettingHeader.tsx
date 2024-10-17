import { Button } from '@radix-ui/themes';

import Title from '@/components/Common/Title';

interface IProps {
  onChangePage: () => void;
  title: string;
  buttonText: string;
}
export default function OfficeSettingHeader({ onChangePage, title, buttonText }: IProps) {
  return (
    <div className="flex justify-between items-center border-b border-b-gray-30 mb-6">
      <Title content={title} />
      <Button variant="outline" color="gray" onClick={onChangePage}>
        {buttonText}
      </Button>
    </div>
  );
}
