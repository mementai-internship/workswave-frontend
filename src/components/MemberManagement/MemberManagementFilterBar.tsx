import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';

export default function MemberManagementFilterBar() {
  return (
    <div className="flex gap-4">
      <SelectBox
        title="지점"
        size="small"
        options={[
          {
            id: 1,
            name: '뮤즈의원(강남점)',
            action: () => {},
          },
          {
            id: 2,
            name: '뮤즈의원(수원인계점)',
            action: () => {},
          },
        ]}
      />
      <ContactSearchInput />
    </div>
  );
}
