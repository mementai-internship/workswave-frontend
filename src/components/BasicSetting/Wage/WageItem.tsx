import { Button } from '@radix-ui/themes';
import { PiX } from 'react-icons/pi';

import { Txt } from '@/components/Common/Txt';
import { ISalaryTemplatesItem } from '@/models/salary-templates.model';
import { TWageEditMode } from '@/pages/basicSetting/WagePage';

interface IProps {
  item: ISalaryTemplatesItem;
  activeEditMode: (id: number) => void;
  handleDeleteItem: (id: number) => void;
  editMode: TWageEditMode;
}

export default function WageItem({ editMode, handleDeleteItem, activeEditMode, item }: IProps) {
  const commaSalary = (value) => value.toLocaleString('ko-KR');
  const calcBasicWorkingHour = Math.ceil((item.weekly_work_days * 8 + 8) * 4.345);
  return (
    <li className="bg-blue-10 p-4 border border-zinc-300">
      <div className="relative flex">
        <div className="flex flex-col w-1/5">
          <Txt variant="subtitle2" className="font-bold" color="black">
            {item.name}
          </Txt>
          <Txt variant="subtitle2" className="font-bold" color="black">
            {item.part_name}
          </Txt>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-5 mb-2">
            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                기본급
              </Txt>
              <Txt variant="body2">{commaSalary(item.month_salary)}</Txt>
              <Txt variant="caption" color="gray-50">
                ({item.weekly_work_days * 8}시간 + 8시간) * 4.345 = {calcBasicWorkingHour}시간
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                포괄산정 연장근로수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.comprehensive_overtime_allowance)}</Txt>
              <Txt variant="caption" color="gray-50">
                {item.comprehensive_overtime_hour}시간
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                연차수당
              </Txt>
              <Txt variant="body2">{commaSalary(item.annual_leave_allowance)}</Txt>
              <Txt variant="caption" color="gray-50">
                {item.annual_leave_allowance_hour}시간 {item.annual_leave_allowance_day}일
              </Txt>
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                휴일수당
              </Txt>
              {/* <Txt variant="body2">{commaSalary(item.holidayAllowance * item.workingDays)}</Txt>
              <Txt variant="body2" color="gray-50">
                {item.holidayHours}시간
              </Txt> */}
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                직무수당
              </Txt>
              {/* 직무수당 api 응답값에 빠져있음 */}
              {/* <Txt variant="body2">{commaSalary(item.dutyAllowance)}</Txt> */}
            </div>

            <div className="flex flex-col">
              <Txt variant="body2" color="gray-50">
                식대
              </Txt>
              {/* 식대 api 응답값에 빠져있음 */}
              {/* <Txt variant="body2">{commaSalary(item.mealAllowance)}</Txt> */}
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                월합계
              </Txt>
              <Txt variant="body2">{commaSalary(item.month_salary)}</Txt>
            </div>
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                [연봉]
              </Txt>
              <Txt variant="body2">{commaSalary(item.annual_salary)}</Txt>
            </div>
            <div className="flex gap-1">
              <Txt variant="body2" color="gray-50">
                주근무일
              </Txt>
              <Txt variant="body2">{item.weekly_work_days}일</Txt>
            </div>
          </div>
        </div>
        {editMode.editItemId !== item.id && (
          <div className="absolute right-3 bottom-0">
            <Button color="gray" variant="surface" onClick={() => activeEditMode(item.id)}>
              수정하기
            </Button>
          </div>
        )}
        <div className="absolute top-1 right-3" onClick={() => handleDeleteItem(item.id)}>
          <PiX />
        </div>
      </div>
    </li>
  );
}
