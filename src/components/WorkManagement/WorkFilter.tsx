import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import WorkSelect, { TOptions } from '@/components/WorkManagement/WorkSelect';
import { useGetAllBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';

interface IWorkFilterProps {
  selectedBranch: TOptions | null;
  setSelectedBranch: (branch: TOptions | null) => void;
  selectedDepartment: TOptions | null;
  setSelectedDepartment: (department: TOptions | null) => void;
}

export default function WorkFilter({
  selectedBranch,
  setSelectedBranch,
  selectedDepartment,
  setSelectedDepartment,
}: IWorkFilterProps) {
  const { data: branches } = useGetAllBranches();
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
  }, [location.pathname, setSelectedBranch, setSelectedDepartment]);

  const mapToOptions = (items: { id: number; name: string }[] | undefined) =>
    items ? items.map((item) => ({ id: item.id, name: item.name })) : [];

  return (
    <div className="flex justify-between py-5 border-t border-gray-200">
      <div className="flex gap-3">
        <WorkSelect
          options={mapToOptions(branches)}
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

      <ContactSearchInput />
    </div>
  );
}
