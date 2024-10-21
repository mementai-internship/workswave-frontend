import { Button, Dialog, Flex } from '@radix-ui/themes';
import {
  PiCalendarDotsLight,
  PiClockLight,
  PiFileTextThin,
  PiMapPinArea,
  PiUserCircleThin,
} from 'react-icons/pi';

import { Txt } from '@/components/Common/Txt';
import Commute from '@/pages/simpleMenu/Commute';

const menuItems = [
  { icon: PiCalendarDotsLight, text: '연차신청', view: <Commute /> },
  { icon: PiClockLight, text: 'O.T/휴일근무 신청', view: <Commute /> },
  { icon: PiFileTextThin, text: '증명서신청', view: <Commute /> },
  { icon: PiUserCircleThin, text: '마이페이지', view: <Commute /> },
  { icon: PiMapPinArea, text: '출/퇴근', view: <Commute /> },
];

const MenuItem = ({ icon: Icon, text, view }) => (
  <div className="flex grow items-center justify-center border border-slate-300 rounded-2xl hover:cursor-pointer hover:bg-slate-200">
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="flex gap-2 items-center justify-center p-2">
          <Icon size={24} />
          <Txt variant="h6">{text}</Txt>
        </div>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title className="mb-6">{text}</Dialog.Title>
        <Dialog.Description size="2" className="mb-6">
          {view}
        </Dialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              취소
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>확인</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  </div>
);

export default function SimpleMenuPage() {
  return (
    <div className="flex w-full gap-2">
      {menuItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
}
