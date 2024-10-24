import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import ContactSearchInput from '@/components/Common/ContactSearchInput';
import WorkSearchInput from '@/components/WorkManagement/WorkSearchInput';
import WorkSelect, { TOptions } from '@/components/WorkManagement/WorkSelect';
import { useGetBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import { selectedBranchAtom, selectedDepartmentAtom } from '@/store/atoms';

export default function WorkFilter() {
  const [selectedBranch, setSelectedBranch] = useAtom<TOptions>(selectedBranchAtom);
  const [selectedDepartment, setSelectedDepartment] = useAtom<TOptions>(selectedDepartmentAtom);
  const { data: branches } = useGetBranches('0');
  const { data: parts } = useGetParts(selectedBranch?.id || null);

  const location = useLocation();
  useEffect(() => {
    if (selectedBranch) {
      setSelectedDepartment(null);
    }
  }, [selectedBranch, setSelectedDepartment]);

  useEffect(() => {
    setSelectedBranch(null);
    setSelectedDepartment(null);
    // 다른 관리로 넘어갈 때 초기화가 되어야 하나?
  }, [location.pathname, setSelectedBranch, setSelectedDepartment]);

  const mapToOptions = (items: { id: number; name: string }[] | undefined) =>
    items ? items.map((item) => ({ id: item.id, name: item.name })) : [];

  return (
    <div className="flex justify-between py-5 border-t border-gray-200">
      <div className="flex gap-3">
        <WorkSelect
          options={mapToOptions(branches?.list)}
          value={selectedBranch?.name}
          onChange={(value: TOptions) => {
            setSelectedBranch(value);
          }}
          defaultValue="지점 선택"
        />
        <WorkSelect
          options={mapToOptions(parts)}
          value={selectedDepartment?.name}
          onChange={(value: TOptions) => {
            setSelectedDepartment(value);
          }}
          defaultValue="파트 선택"
        />
      </div>
      <WorkSearchInput />
    </div>
  );
}
