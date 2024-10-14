import HourlyRangeInput from '@/components/BasicSetting/HourlyRange/HourlyRangeInput';
import HourlyRangeInputContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeInputContainer';
import { Txt } from '@/components/Common/Txt';
import { useHourlyRange } from '@/hooks/useHourlyRange';
import { IHourlyRangeItemSplitTime } from '@/models/hourlyRange.model';
import { Box, Button, Flex } from '@radix-ui/themes';
import { PiPencilLine, PiX } from 'react-icons/pi';

interface IProps {
  item: IHourlyRangeItemSplitTime;
}

export default function HourlyRangeItem({ item }: IProps) {
  const { handleEditMode, itemId } = useHourlyRange();
  return (
    <li key={item.templateId} className="list-none px-6 py-2">
      <Box className="flex items-center justify-between mb-2">
        <Box className="flex gap-2">
          <Txt>{item.positionName}</Txt>
          <Txt className="font-semibold">{item.templateName}</Txt>
        </Box>

        <Flex gap="1">
          {Number(itemId) !== item.templateId && (
            <Button
              variant="outline"
              color="gray"
              radius="none"
              size="1"
              className="cursor-pointer"
              onClick={() => handleEditMode(item.templateId)}
            >
              <PiPencilLine />
              수정
            </Button>
          )}
          <Button variant="outline" color="gray" radius="none" size="1" className="cursor-pointer">
            <PiX />
            삭제
          </Button>
        </Flex>
      </Box>

      <Box className="flex gap-3">
        <HourlyRangeInputContainer title="시업시간">
          <HourlyRangeInput label="시" value={item.startTimeHour} readOnly name="startTimeHour" />
          <HourlyRangeInput
            label="분"
            value={item.startTimeMinute}
            readOnly
            name="startTimeMinute"
          />
        </HourlyRangeInputContainer>
        <HourlyRangeInputContainer title="종업시간">
          <HourlyRangeInput label="시" value={item.endTimeHour} readOnly name="endTimeHour" />
          <HourlyRangeInput label="분" value={item.endTimeMinute} readOnly name="endTimeMinute" />
        </HourlyRangeInputContainer>
        <HourlyRangeInputContainer title="시급">
          <HourlyRangeInput label="원" value={item.hourlyWage} readOnly name="hourlyWage" />
        </HourlyRangeInputContainer>
        <HourlyRangeInputContainer title="재택근무시급">
          <HourlyRangeInput
            label="원"
            value={item.remoteHourlyWage}
            readOnly
            name="remoteHourlyWage"
          />
        </HourlyRangeInputContainer>
      </Box>
    </li>
  );
}
