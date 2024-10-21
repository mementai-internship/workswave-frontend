import { Button, Dialog, Popover } from '@radix-ui/themes';
import { PiArrowUUpRightFill, PiCheck, PiNote, PiX } from 'react-icons/pi';

import Badge from '@/components/Common/LabelBadge';
import { Txt } from '@/components/Common/Txt';
import CertificationManagementDialog from '@/components/DocumentManagement/CertificationManagement/CertificationManagementDialog';

interface ICertificationManagementItemProps {
  id: number;
  part: string;
  name: string;
  applyDate: string;
  applyType: string;
  applyManager: string;
  applyStatus: string;
  applyUse: string;
  applyMemo: string;
  applyTreatDate: Date | null;
  isCurrentUser: boolean;
}

export default function CertificationManagementItem({
  id,
  part,
  name,
  applyDate,
  applyType,
  applyManager,
  applyStatus,
  applyUse,
  applyMemo,
  applyTreatDate,
  isCurrentUser,
}: ICertificationManagementItemProps) {
  // TODO : 증명서 승인 버튼 클릭 시 모달창(Dialog) 팝업 됨, Dialog Contents 추가 구현 필요

  return (
    <div
      className={`flex items-center justify-between p-4 bg-gray-200 rounded-lg ${
        isCurrentUser ? 'bg-slate-200 border border-slate-300 ' : ''
      }`}
    >
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-lg bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-bold">{part}</span>
        </div>
        <div className="ml-4">
          <div className="flex items-center gap-2">
            <Txt variant="body2" color="gray-50">
              신청일 {applyDate}
            </Txt>
          </div>
          <div className="flex items-center gap-2 my-1">
            <Txt variant="subtitle1">{name}</Txt>
            {applyStatus === '승인' ? (
              <Badge size={1} color="green" radius="large" text={applyStatus} />
            ) : (
              <Badge size={1} color="gray" radius="large" text={applyStatus} />
            )}
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xs text-gray-500">{applyType}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-700">담당자: {applyManager}</p>
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft" color="gray">
                <PiNote className="text-2xl" />
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="relative">
                <Popover.Close className="w-4 h-4 absolute -top-2 -right-2 rounded-full hover:text-red">
                  <PiX />
                </Popover.Close>
                <div className="flex flex-col gap-2 pt-2 min-w-48 min-h-24 p-1">
                  <Txt variant="body2" color="gray-50">
                    사용:{' '}
                    <Txt variant="body2" color="black">
                      {applyUse}
                    </Txt>
                  </Txt>
                  <Txt variant="body2" color="gray-50">
                    메모: <div className="w-full text-black">{applyMemo}</div>
                  </Txt>
                </div>
                {applyTreatDate && (
                  <p className="text-xs text-gray-500 text-right absolute -bottom-3 -right-1">
                    처리일: {applyTreatDate.toLocaleDateString()}
                  </p>
                )}
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>
        <div className="flex items-center gap-2">
          <Dialog.Root>
            <Dialog.Trigger>
              <Button variant="soft" color="gray">
                <PiCheck />
                승인
              </Button>
            </Dialog.Trigger>
            <Dialog.Content className="w-[90vw] h-[100vh] max-w-[1500px] max-h-[800px]">
              <CertificationManagementDialog id={id} name={name} part={part} applyUse={applyUse} />
            </Dialog.Content>
          </Dialog.Root>
          <Button variant="soft" color="gray">
            <PiArrowUUpRightFill />
            반려
          </Button>
        </div>
      </div>
    </div>
  );
}
