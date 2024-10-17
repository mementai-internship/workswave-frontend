import { IOfficeItemResponse } from '@/models/officeSetting.model';
import { Button, Table } from '@radix-ui/themes';
import React from 'react';

interface IProps {
  data: IOfficeItemResponse;
  idx: number;
  action: () => void;
  buttonText: string;
}

export default function OfficeSettingTableCell({ action, data, idx, buttonText }: IProps) {
  const isNotEmpty = (file: string) => (file ? 'Y' : 'N');
  return (
    <Table.Row className="text-center">
      <Table.RowHeaderCell className="w-[5%]">{idx + 1}</Table.RowHeaderCell>
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
        <Button size="1" variant="outline" color="gray" className="text-xs" onClick={action}>
          {buttonText}
        </Button>
      </Table.Cell>
    </Table.Row>
  );
}
