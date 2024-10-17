import OfficeSettingTableCell from '@/components/OfficeSetting/OfficeSettingTableCell';
import { OFFICE_SETTING_TABLE_TITLE } from '@/constants/officeSettingTableTitle';
import { IOfficeItemResponse } from '@/models/officeSetting.model';
import { Table } from '@radix-ui/themes';
import React from 'react';

interface IProps {
  list: IOfficeItemResponse[];
  action: () => void;
  buttonText: string;
}

export default function OfficeSettingTable({ list, action, buttonText }: IProps) {
  return (
    <Table.Root className="w-full">
      <Table.Header>
        <Table.Row className="bg-gray-300 h-[48px]">
          {OFFICE_SETTING_TABLE_TITLE.map((title) => (
            <Table.ColumnHeaderCell className="p-2 text-center align-middle" key={title}>
              {title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {list.map((data, idx) => (
          <React.Fragment key={data.id}>
            <OfficeSettingTableCell buttonText={buttonText} action={action} data={data} idx={idx} />
          </React.Fragment>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
