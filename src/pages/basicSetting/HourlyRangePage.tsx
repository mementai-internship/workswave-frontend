// import { useEffect, useState } from 'react';

// import HourlyRangeCreate from '@/components/BasicSetting/HourlyRange/HourlyRangeCreate';
// import HourlyRangeList from '@/components/BasicSetting/HourlyRange/HourlyRangeList';
// import { useGetAllBranches } from '@/hooks/apis/useBranches';
// import { useGetHourWageTemplates } from '@/hooks/apis/useHourWageTemplates';
// import { useGetCurrentUser } from '@/hooks/apis/useUserManagement';

export default function HourlyRangePage() {
  // const { data: currentUser, isLoading: isUserLoading } = useGetCurrentUser();
  // const { data: allBranches, isLoading: isBranchesLoading } = useGetAllBranches();
  // const [selectedBranchId, setSelectedBranchId] = useState<number | null>(null);

  // const { data: hourWageTemplates } = useGetHourWageTemplates(selectedBranchId);
  // console.log(selectedBranchId, hourWageTemplates);
  return (
    <div className="flex items-start gap-1 min-w-[1120px] h-[calc(100vh-160px)] mx-auto ">
      {/* <HourlyRangeList />
      <HourlyRangeCreate /> */}
    </div>
  );
}
