import { useForm } from 'react-hook-form';

import SelectBox from '@/components/Common/Select';
import { branchMockData, departmentMockData } from '@/constants/workManagement/workSelect.mock';

export default function WorkSelect() {
  const { register } = useForm();
  return (
    <div className="flex gap-3">
      <SelectBox
        title="지점 선택"
        name="branch"
        options={branchMockData}
        size="small"
        border={true}
        register={register}
      />
      <SelectBox
        title="파트 선택"
        name="position"
        options={departmentMockData}
        size="small"
        border={true}
        register={register}
      />
    </div>
  );
}
