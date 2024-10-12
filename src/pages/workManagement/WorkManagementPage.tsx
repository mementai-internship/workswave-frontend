import WorkFilterLayout from '@/components/WorkManagement/WorkFilterLayout';
import WorkTable from '@/components/WorkManagement/WorkTable';

export default function LaborManagementPage() {
  return (
    <div>
      <WorkFilterLayout />
      <WorkTable />
    </div>
  );
}
