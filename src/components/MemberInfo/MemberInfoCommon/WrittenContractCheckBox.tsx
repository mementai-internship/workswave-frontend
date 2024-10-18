import { CheckboxCards, Flex, Text } from '@radix-ui/themes';
import { PiXBold } from 'react-icons/pi';

export interface IWrittenContractCheckBoxProps {
  titleText: string;
  date: string;
  name: string;
  sending: string;
}

export default function WrittenContractCheckBox({
  titleText,
  date,
  name,
  sending,
}: IWrittenContractCheckBoxProps) {
  return (
    <CheckboxCards.Item value="1" className="w-[210px] h-12">
      <Flex direction="row" width="100%" justify="between" align="center">
        <div className="flex flex-col items-center justify-center gap-0.5">
          <button>
            <PiXBold size={12} />
          </button>
          <Text className="text-center text-[8px] whitespace-nowrap">{sending}회 발송</Text>
        </div>
        <div className="flex flex-col justify-center items-center gap-0.5">
          <Text weight="bold" className="whitespace-nowrap text-[10px]">
            {titleText}
          </Text>
          <Text className="text-[10px] whitespace-nowrap">
            {date} [{name}]
          </Text>
        </div>
      </Flex>
    </CheckboxCards.Item>
  );
}
