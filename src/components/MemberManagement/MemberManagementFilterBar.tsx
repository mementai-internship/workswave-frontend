import { Button } from '@radix-ui/themes';

import ContactSearchInput from '@/components/Common/ContactSearchInput';
import SelectBox from '@/components/Common/Select';

export default function MemberManagementFilterBar() {
  return (
    <div className="flex gap-2">
      <div>
        <SelectBox
          title="지점"
          size="xSmall"
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
        <SelectBox
          title="파트"
          size="xSmall"
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
      </div>
      <ContactSearchInput />
      <Button color="gray" size="2">
        초기화
      </Button>
    </div>
  );
}
