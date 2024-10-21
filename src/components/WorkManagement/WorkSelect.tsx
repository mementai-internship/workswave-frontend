import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import SelectBox from '@/components/Common/Select';
import { useGetAllBranches } from '@/hooks/apis/useBranches';
import { useGetParts } from '@/hooks/apis/useParts';
import { IPartsResponse } from '@/models/parts';

export default function WorkSelect() {
  const { register, reset } = useForm();
  const location = useLocation();

  const [selectedBranch, setSelectedBranch] = useState<number | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

  const { data: branches } = useGetAllBranches();
  const { data: parts } = useGetParts(selectedBranch);

  useEffect(() => {
    setSelectedBranch(null);
    setSelectedDepartment(null);
    reset();
  }, [location, reset]);

  useEffect(() => {
    setSelectedDepartment(null);
  }, [selectedBranch]);

  const branchOptions = branches
    ? branches.map((branch) => ({
        id: branch.id,
        name: branch.name,
        action: () => {
          setSelectedBranch(branch.id);
        },
      }))
    : [];

  const partsOptions = parts
    ? parts.map((part: IPartsResponse) => ({
        id: part.id,
        name: part.name,
        action: () => {
          setSelectedDepartment(part.id);
        },
      }))
    : [];

  const filteredBranchOptions = branchOptions.map((option) => ({
    ...option,
    selected: option.id === selectedBranch,
  }));

  const filteredPartsOptions = partsOptions.map((option) => ({
    ...option,
    selected: option.id === selectedDepartment,
  }));

  return (
    <div className="flex gap-3">
      <SelectBox
        title="지점 선택"
        name="branch"
        options={filteredBranchOptions}
        size="small"
        border={true}
        register={register}
      />
      <SelectBox
        title="파트 선택"
        name="position"
        options={filteredPartsOptions}
        size="small"
        border={true}
        register={register}
      />
    </div>
  );
}
