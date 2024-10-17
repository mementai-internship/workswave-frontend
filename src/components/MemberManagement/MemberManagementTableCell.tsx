//import calculateWorkPeriod from '@/utils/calculateWorkPeriod';
import { Table } from '@radix-ui/themes';
import { PiStarFill, PiXBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { IMemberManagementTableProps, userId } from './MemberManagementTable';

export default function MemberManagementTableCell({ data }: { data: IMemberManagementTableProps }) {
  return (
    <Table.Row
      key={data.id}
      className={`${data.id === userId ? 'border-b-8 border-gray-300' : ''}`}
    >
      <Table.RowHeaderCell className="text-center p-4 align-middle w-[3%]">
        {data.id}
      </Table.RowHeaderCell>
      <Table.Cell className="text-center p-4 align-middle w-[10%]">{data.branch}</Table.Cell>
      <Table.Cell className="p-4 align-middle w-[8%]">
        <Link to={`/member-management/member-info`}>
          <div
            className={`${data.id === userId ? 'font-bold' : ''} flex flex-row gap-1 justify-center items-center`}
          >
            {/* gender 값 없어서 주석 처리 {data.gender === '남' ? <PiGenderMale /> : <PiGenderFemale />} {data.name} */}
            {data.name}
            {data.id === userId ? <PiStarFill /> : null}
          </div>
        </Link>
      </Table.Cell>
      <Table.Cell className="p-4 align-middle w-[8%] whitespace-nowrap">{data.part}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">{data.birth_date}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[10%]">{data.phone_number}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[12%]">{data.email}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[9%]">{data.hire_date}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[7%]">{data.monthly_salary}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">{data.annual_salary}</Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[8%]">
        {/* 값없어서 주석 처리{calculateWorkPeriod(
          data.contractPeriod.start.toString(),
          data.contractPeriod.end.toString()
        )} */}
      </Table.Cell>
      <Table.Cell className="flex flex-row h-full gap-0.5 justify-center items-center">
        <div className="flex flex-col gap-0.5">
          <div className="bg-gray-200 rounded-md px-1 text-[10px] whitespace-nowrap align-middle text-center">
            -30
          </div>
          <div className="bg-gray-200 rounded-md px-1 text-[10px] whitespace-nowrap bg-gray-500 text-white align-middle text-center">
            근로
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="bg-gray-200 rounded-md px-1 text-[10px] whitespace-nowrap bg-gray-500 text-white align-middle text-center">
            임금
          </div>
          <div className="bg-gray-200 rounded-md px-1 text-[10px] whitespace-nowrap bg-gray-500 text-white align-middle text-center">
            기본
          </div>
        </div>
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[2%]">
        <button>
          <PiXBold />
        </button>
      </Table.Cell>
    </Table.Row>
  );
}
