import { Box, Button, Flex } from '@radix-ui/themes';
import { PiPencilLine, PiX } from 'react-icons/pi';

import HourlyRangeInput from '@/components/BasicSetting/HourlyRange/HourlyRangeInput';
import HourlyRangeInputContainer from '@/components/BasicSetting/HourlyRange/HourlyRangeInputContainer';
import { THourlyRangeSelectType } from '@/components/BasicSetting/HourlyRange/HourlyRangeSelect';
import { Txt } from '@/components/Common/Txt';
import { IHourWageTemplatesForm } from '@/models/hour-wage-templates';
import { THourlyRangeEditMode } from '@/pages/basicSetting/HourlyRangePage';

interface IProps {
  editMode: THourlyRangeEditMode;
  item: IHourWageTemplatesForm;
  parts: THourlyRangeSelectType;
  activateEditMode: (id: number) => void;
  handleDeleteItem: (id: number) => void;
}

export default function HourlyRangeItem({
  parts,
  handleDeleteItem,
  activateEditMode,
  item,
  editMode,
}: IProps) {
  const partName = parts.find((part) => part.id === item.part_id)?.name;
  return (
    <li
      key={item.id}
      className="px-6 py-2 list-none border-[1px] rounded-sm mx-4 hover:bg-gray-100"
    >
      <Box className="flex items-center justify-between mb-3">
        <Box className="flex gap-2">
          <Txt>{partName}</Txt>
          <Txt className="font-semibold">{item.name}</Txt>
        </Box>

        <Flex gap="1">
          {editMode.editItemId !== item.id && (
            <Button
              variant="outline"
              color="gray"
              radius="none"
              size="1"
              className="cursor-pointer hover:bg-slate-200"
              onClick={() => activateEditMode(item.id)}
            >
              <PiPencilLine />
              수정
            </Button>
          )}

          <Button
            variant="outline"
            color="gray"
            radius="none"
            size="1"
            className="cursor-pointer hover:bg-slate-200"
            onClick={() => handleDeleteItem(item.id)}
          >
            <PiX />
            삭제
          </Button>
        </Flex>
      </Box>

      <Box className="flex gap-5">
        <HourlyRangeInputContainer title="시업시간">
          <HourlyRangeInput
            label="시"
            value={item.start_time_hour}
            readOnly
            name="start_time_hour"
          />
          <HourlyRangeInput
            label="분"
            value={item.start_time_minutes}
            readOnly
            name="start_time_minutes"
          />
        </HourlyRangeInputContainer>

        <HourlyRangeInputContainer title="종업시간">
          <HourlyRangeInput label="시" value={item.end_time_hour} readOnly name="end_time_hour" />
          <HourlyRangeInput
            label="분"
            value={item.end_time_minutes}
            readOnly
            name="end_time_minutes"
          />
        </HourlyRangeInputContainer>

        <HourlyRangeInputContainer title="시급">
          <HourlyRangeInput
            label="원"
            value={item.hour_wage.toLocaleString()}
            readOnly
            name="hour_wage"
          />
        </HourlyRangeInputContainer>

        <HourlyRangeInputContainer title="재택근무시급">
          <HourlyRangeInput
            label="원"
            value={item.home_hour_wage.toLocaleString()}
            readOnly
            name="home_hour_wage"
          />
        </HourlyRangeInputContainer>
      </Box>
    </li>
  );
}
