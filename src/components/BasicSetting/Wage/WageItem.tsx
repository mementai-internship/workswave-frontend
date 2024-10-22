import { Button } from '@radix-ui/themes';
import { PiX } from 'react-icons/pi';

import { Txt } from '@/components/Common/Txt';
import { IWageSetting } from '@/models/wageSetting.model';
import { TWageEditMode } from '@/pages/basicSetting/WagePage';

interface IProps {
  item: IWageSetting;
  activeEditMode: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  editMode: TWageEditMode;
}

export default function WageItem({ editMode, handleDeleteItem, activeEditMode, item }: IProps) {
  const commaSalary = (value) => value.toLocaleString('ko-KR');

  return (
    <li className="bg-blue-10 p-4 border border-zinc-300">
      <div className="relative flex">
        <div className="flex flex-col w-1/5">
          <Txt variant="subtitle2" className="font-bold" color="black">
            {item.templateName}
          </Txt>
          <Txt variant="subtitle2" className="font-bold" color="black">
            {item.positionName}
          </Txt>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-5 mb-2">
            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                기본급
              </Txt>
              <Txt variant="body2">{commaSalary(item.monthlySalary)}</Txt>
              <Txt variant="body2" color="gray-50">
                ({item.workingDays * 8}시간 + 8시간) * 4.345
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                포괄산정 연장근로수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.inclusiveOvertimeAllowance)}</Txt>
              <Txt variant="body2" color="gray-50">
                8시간 {item.overtimeHDays}일
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                연차수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.holidayAllowance)}</Txt>
              <Txt variant="body2" color="gray-50">
                {item.holidayHours}시간
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                휴일수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.holidayAllowance * item.workingDays)}</Txt>
              <Txt variant="body2" color="gray-50">
                {item.holidayHours}시간
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                직무수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.dutyAllowance)}</Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                식대
              </Txt>
              <Txt variant="body2">{commaSalary(item.mealAllowance)}</Txt>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                월합계
              </Txt>
              <Txt variant="body2">100000</Txt>
            </div>
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                [연봉]
              </Txt>
              <Txt variant="body2">{commaSalary(item.monthlySalary * 12)}</Txt>
            </div>
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                주근무일
              </Txt>
              <Txt variant="body2">{item.workingDays}일</Txt>
            </div>
          </div>
        </div>
        {editMode.editItemId !== item.templateId && (
          <div className="absolute right-3 bottom-0">
            <Button color="gray" variant="surface" onClick={() => activeEditMode(item.templateId)}>
              수정하기
            </Button>
          </div>
        )}
        <div className="absolute top-1 right-3" onClick={() => handleDeleteItem(item.templateId)}>
          <PiX />
        </div>
      </div>
    </li>
  );
}
