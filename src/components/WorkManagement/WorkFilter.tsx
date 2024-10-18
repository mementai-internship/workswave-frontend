import ContactSearchInput from '../Common/ContactSearchInput';
import WorkSelect from './WorkSelect';

export default function WorkFilter() {
  return (
    <div className="flex justify-between py-5 border-t border-gray-200">
      <WorkSelect />
      <ContactSearchInput />
    </div>
  );
}
