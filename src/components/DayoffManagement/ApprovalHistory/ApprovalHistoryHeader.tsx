import { Button } from '@radix-ui/themes';
import React from 'react';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import TitleContainer from '@/components/Common/TitleContainer';

export default function ApprovalHistoryHeader() {
  return (
    <div>
      <div className="flex items-center">
        <TitleContainer content="전체승인내역">
          <div className="flex flex-row gap-2 items-center">
            <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
              <PiGear />
              <Link to="/dayoff-management">연차관리</Link>
            </Button>
          </div>
        </TitleContainer>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
    </div>
  );
}
