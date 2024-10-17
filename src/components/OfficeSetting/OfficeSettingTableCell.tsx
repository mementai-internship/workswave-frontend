import { Button, Table } from '@radix-ui/themes';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { IBranchResponse } from '@/models/branches.model';

interface IProps {
  data: IBranchResponse;
  idx: number;
  action: (id: number) => void;
  buttonText: string;
}

export default function OfficeSettingTableCell({ action, data, idx, buttonText }: IProps) {
  const isNotEmpty = (file: string) => (file !== 'None' ? 'Y' : 'N');
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ?? 1;
  const startIdx = (Number(currentPage) - 1) * 10;
  return (
    <Table.Row className="text-center">
      <Table.RowHeaderCell className="w-[5%]">{startIdx + idx + 1}</Table.RowHeaderCell>
      <Table.Cell className="w-[15%]">{data.name}</Table.Cell>
      <Table.Cell className="w-[10%]">{data.code}</Table.Cell>
      <Table.Cell className="w-[10%]">{data.representative_name}</Table.Cell>
      <Table.Cell className="w-[12%]">{data.registration_number}</Table.Cell>
      <Table.Cell className="w-[12%]">{data.call_number}</Table.Cell>
      <Table.Cell className="w-[14%]">{data.mail_address}</Table.Cell>
      <Table.Cell className="w-[10%]">
        {isNotEmpty(data.corporate_seal)}/{isNotEmpty(data.nameplate)}
      </Table.Cell>
      <Table.Cell className="w-[10%]">
        <Button
          size="1"
          variant="outline"
          color="gray"
          className="text-xs"
          onClick={() => action(data.id)}
        >
          {buttonText}
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
