import calculateWorkPeriod from '@/utils/calculateWorkPeriod';
import { Table } from '@radix-ui/themes';
import { PiGenderFemale, PiGenderMale, PiStarFill, PiXBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { IMemberManagementTableProps } from './MemberManagementTable';

export default function MemberManagementTableCell({ data }: { data: IMemberManagementTableProps }) {
  return (
    <Table.Row key={data.id} className={`${data.id === 2 ? 'border-b-8 border-gray-300' : ''}`}>
      <Table.RowHeaderCell className="text-center p-4 align-middle w-[3%]">
        {data.id}
      </Table.RowHeaderCell>
      <Table.Cell className="text-center p-4 align-middle w-[12%]">{data.branch}</Table.Cell>
      <Table.Cell className="p-4 align-middle w-[10%]">
        <Link to={`/member-management/member-info`}>
          <div
            className={`${data.id === 2 ? 'font-bold' : ''} flex flex-row gap-1 justify-center items-center`}
          >
            {data.gender === '남' ? <PiGenderMale /> : <PiGenderFemale />} {data.name}
            {data.id === 2 ? <PiStarFill /> : null}
          </div>
        </Link>
      </Table.Cell>
      <Table.Cell className="p-4 align-middle w-[3%]">{data.workPart}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">{data.birth}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">{data.phone}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">{data.email}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">
        {data.contractPeriod.start}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">
        {data.contractPeriod.salary}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">
        {data.contractPeriod.annualSalary}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">
        {calculateWorkPeriod(
          data.contractPeriod.start.toString(),
          data.contractPeriod.end.toString()
        )}
      </Table.Cell>
      <Table.Cell className="flex flex-row h-full gap-1 justify-center items-center">
        <div className="flex flex-col gap-1">
          <div className="bg-gray-200 rounded-md px-1.5 align-middle text-center">-30</div>
          <div className="bg-gray-200 rounded-md px-1.5 bg-gray-500 text-white align-middle text-center">
            근로
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="bg-gray-200 rounded-md px-1.5 bg-gray-500 text-white align-middle text-center">
            임금
          </div>
          <div className="bg-gray-200 rounded-md px-1.5 bg-gray-500 text-white align-middle text-center">
            기본
          </div>
        </div>
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle">
        <button>
          <PiXBold />
        </button>
      </Table.Cell>
    </Table.Row>
  );
}
