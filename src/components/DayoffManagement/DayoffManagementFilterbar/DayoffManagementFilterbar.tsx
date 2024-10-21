import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser] = useAtom(currentUserAtom);
  const { data: branchData, isLoading: branchLoading } = useGetAllBranches();

  useEffect(() => {
    getCurrentUser().then((res) => {
      console.log(res);
    });
  }, [currentUser]);

  if (currentUser.status === 'error') return navigate('/login');
  if (branchLoading) return <div>Loading...</div>;

  const handleBranchSelect = (branchId: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('branch_id', branchId.toString());
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const handleStatusSelect = (status: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('status', status);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  return (
    <div className="flex gap-4 justify-between">
      <div>
        {currentUser.data?.role && currentUser.data.role === 'MSO 최고권한' && (
          <SelectBox
            size="small"
            title="지점 선택"
            options={branchData?.map((branch) => ({
              id: branch.id,
              name: branch.name,
              action: () => handleBranchSelect(branch.id),
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
              action: () => handleStatusSelect('all'),
            },
            {
              id: 1,
              name: '대기',
              action: () => handleStatusSelect('pending'),
            },
            {
              id: 2,
              name: '승인',
              action: () => handleStatusSelect('approved'),
            },
            {
              id: 3,
              name: '반려',
              action: () => handleStatusSelect('rejected'),
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
