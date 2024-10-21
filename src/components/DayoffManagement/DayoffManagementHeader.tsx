import * as Label from '@radix-ui/react-label';
import { Button, Dialog, Flex, Popover, TextArea } from '@radix-ui/themes';
import { ko } from 'date-fns/locale';
import React, { useState } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import { PiGear } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import SelectBox from '@/components/Common/Select';
import TitleContainer from '@/components/Common/TitleContainer';
import { TUser } from '@/models/user.model';

interface DayoffManagementHeaderProps {
  currentUser: TUser;
}

export default function DayoffManagementHeader({ currentUser }: DayoffManagementHeaderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const defaultClassNames = getDefaultClassNames(); // react-day-picker 에서 tailwind 사용을 위한 선언
  return (
    <div>
      <div className="flex justify-between items-center">
        <TitleContainer content="연차관리">
          {currentUser.role === 'MSO 최고권한' ||
            (currentUser.role === '최고관리자' && (
              <Button color="gray" variant="soft" radius="full" onClick={() => {}}>
                <PiGear />
                <Link to="/dayoff-management/approval-history">전체승인내역</Link>
              </Button>
            ))}
        </TitleContainer>
        <div>
          <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            <Dialog.Trigger>
              <Button
                variant="surface"
                color="gray"
                size="3"
                className="font-bold text-black text-sm p-4 bg-gray-200 border-gray-10"
              >
                연차신청
              </Button>
            </Dialog.Trigger>
            <Dialog.Content>
              <Dialog.Title>연차 신청</Dialog.Title>
              <Flex direction="column" gap="2">
                <Flex direction="row" gap="6">
                  <Flex direction="column" gap="2" className="w-1/4">
                    <Label.Root htmlFor="dayoffType">연차 종류</Label.Root>
                    <SelectBox
                      size="small"
                      title="연차 선택"
                      options={[
                        {
                          id: 1,
                          name: '연차',
                          action: () => {
                            console.log('연차');
                          },
                        },
                        {
                          id: 2,
                          name: '반차',
                          action: () => {
                            console.log('반차');
                          },
                        },
                      ]}
                    />
                  </Flex>
                  <Flex direction="column" gap="2" className="w-1/3">
                    <Label.Root htmlFor="applicationDate">신청날짜</Label.Root>
                    <Popover.Root>
                      <Popover.Trigger>
                        <Button variant="surface" color="gray" size="3">
                          {startDate.toLocaleDateString('ko-KR')}
                        </Button>
                      </Popover.Trigger>
                      <Popover.Content>
                        <DayPicker
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          locale={ko}
                          defaultMonth={startDate}
                          classNames={{
                            day: 'p-1 text-lg',
                            today: `font-bold text-xl text-amber-500`,
                            selected: `bg-purple-10 rounded-full`,
                            root: `${defaultClassNames.root}`,
                            chevron: `${defaultClassNames.chevron} fill-purple-30`,
                          }}
                        />
                      </Popover.Content>
                    </Popover.Root>
                  </Flex>
                </Flex>
              </Flex>
              <div className="mt-4">
                <Label.Root htmlFor="applicationMemo">신청메모</Label.Root>
                <TextArea id="applicationMemo" className="h-40" />
              </div>
              <Button className="w-full mt-4 bg-purple-50">신청</Button>
            </Dialog.Content>
          </Dialog.Root>
        </div>
      </div>
      <hr className="w-min-screen h-0.5 bg-gray-300" />
    </div>
  );
}
