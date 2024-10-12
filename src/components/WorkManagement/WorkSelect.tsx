import {
  branchMockData,
  departmentMockData,
} from '@/constants/workManagementTable/workSelect.mock';
import { TWorkOption } from '@/models/workManagement/work.model';
import { Select } from '@radix-ui/themes';

export default function WorkSelect() {
  return (
    <div className="flex gap-3">
      <Select.Root defaultValue="0">
        <Select.Trigger radius="none" />
        <Select.Content>
          <Select.Group>
            {branchMockData.map((branch: TWorkOption) => (
              <Select.Item key={branch.id} value={branch.id.toString()}>
                {branch.value}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="0">
        <Select.Trigger radius="none" />
        <Select.Content>
          <Select.Group>
            {departmentMockData.map((department: TWorkOption) => (
              <Select.Item key={department.id} value={department.id.toString()}>
                {department.value}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
