import { Button } from '@radix-ui/themes';
import React from 'react';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import TitleContainer from '@/components/Common/TitleContainer';

export default function DayoffManagementHeader() {
  return (
    <div>
      <div className="flex  justify-between items-center ">
        <TitleContainer content="연차관리">
          <div className="flex flex-row gap-2 items-center">
            <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
              <PiGear />
              <Link to="/dayoff-management/approval-history">전체승인내역</Link>
            </Button>
          </div>
        </TitleContainer>
        <div>
          <Button
            variant="surface"
            color="gray"
            size="3"
            className="font-bold text-black text-sm p-4 bg-gray-200 border-gray-10"
            onClick={() => {}}
          >
            연차신청
          </Button>
        </div>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
    </div>
  );
}
