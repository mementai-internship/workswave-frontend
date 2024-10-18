import { Button } from '@radix-ui/themes';
import React from 'react';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import TitleContainer from '@/components/Common/TitleContainer';

export default function EntireHistoryHeader() {
  return (
    <div className="flex items-center">
      <TitleContainer content="전체O.T내역"></TitleContainer>
      <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
        <PiGear />
        <Link to="/ot-management/entire-history">O.T관리</Link>
      </Button>
    </div>
  );
}
