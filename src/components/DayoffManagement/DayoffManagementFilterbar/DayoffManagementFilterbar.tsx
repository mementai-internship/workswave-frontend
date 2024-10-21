import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

import { getCurrentUser } from '@/apis/auth.api';
import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';
import WeekSelector from '@/components/DayoffManagement/DayoffManagementFilterbar/WeekSelector';
import { useGetAllBranches } from '@/hooks/apis/useBranches';
import { currentUserAtom } from '@/store/authAtoms';

const dummyPart = [
  {
    id: 1,
    name: '코디',
    action: () => {},
  },
  {
    id: 2,
    name: '제모',
    action: () => {},
  },
  {
    id: 3,
    name: '상담',
    action: () => {},
  },
];
export default function DayoffManagementFilterbar() {
  const [currentUser] = useAtom(currentUserAtom);
  const { data: branchData } = useGetAllBranches();

  useEffect(() => {
    getCurrentUser().then((res) => {
      console.log(res);
      console.log(branchData);
    });
  }, [currentUser]);
  return (
    <div className="flex gap-4 justify-between">
      <div>
        {currentUser.data.role === 'MSO 최고권한' && (
          <SelectBox
            size="small"
            title="지점 선택"
            options={branchData?.map((branch) => ({
              id: branch.id,
              name: branch.name,
              action: () => {},
            }))}
          />
        )}

        <SelectBox size="small" title="파트선택" options={dummyPart} />
        <SelectBox
          size="small"
          title="상태 변경"
          options={[
            {
              id: 0,
              name: '전체',
              action: () => {},
            },
            {
              id: 3,
              name: '대기',
              action: () => {},
            },
            {
              id: 1,
              name: '승인',
              action: () => {},
            },
            {
              id: 2,
              name: '반려',
              action: () => {},
            },
          ]}
        />
      </div>
      <WeekSelector />

      <div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm">검색</span>
          <ContactSearchInput />
        </div>
      </div>
    </div>
  );
}
