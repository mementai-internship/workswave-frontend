import ContactSearchInput from '@/components/Common/ContactSearchInput';
import WorkSelect from '@/components/WorkManagement/WorkSelect';

export default function WorkFilter() {
  return (
    <div className="flex justify-between py-5 border-t border-gray-200">
      <WorkSelect />
      <ContactSearchInput />
    </div>
  );
}
