//import calculateWorkPeriod from '@/utils/calculateWorkPeriod';
import { Table } from '@radix-ui/themes';
import { PiStarFill, PiXBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';

import { IMemberManagementTableData, userId } from './MemberManagementTable';

export default function MemberManagementTableCell({
  data,
  tab,
}: {
  data: IMemberManagementTableData;
  tab: string;
}) {
  console.log(tab);
  return (
    <Table.Row
      key={data.id}
      className={`${data.id === userId ? 'border-b-8 border-gray-300' : ''}`}
    >
      <Table.RowHeaderCell className="text-center p-4 align-middle w-[3%]">
        {data.id}
      </Table.RowHeaderCell>
      <Table.Cell className="text-center p-4 align-middle w-[14%] whitespace-nowrap">
        {data.branch}
      </Table.Cell>
      <Table.Cell className="p-4 align-middle w-[12%] whitespace-nowrap">
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
      <Table.Cell className="p-4 align-middle w-[6%] whitespace-nowrap text-center">
        {data.part}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[9%] whitespace-nowrap">
        {data.birth_date}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[13%] whitespace-nowrap">
        {data.phone_number}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[7%] whitespace-nowrap">
        {data.email}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[10%] whitespace-nowrap">
        {data.hire_date}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[6%] whitespace-nowrap">
        {data.monthly_salary}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[6%] whitespace-nowrap">
        {data.annual_salary}
      </Table.Cell>
      <Table.Cell className="text-center p-4 align-middle w-[7%] whitespace-nowrap">
        {/* 값없어서 주석 처리{calculateWorkPeriod(
          data.contractPeriod.start.toString(),
          data.contractPeriod.end.toString()
        )} */}
      </Table.Cell>
      <Table.Cell className="flex flex-row h-full gap-0.5 justify-center items-center">
        <div className="flex flex-col gap-0.5">
          <div className="bg-gray-200 rounded-md px-1 h-4 text-[10px] whitespace-nowrap flex items-center justify-center">
            -30
          </div>
          <div className="bg-gray-200 rounded-md px-1 h-4 text-[10px] whitespace-nowrap bg-gray-500 text-white flex items-center justify-center">
            근로
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="bg-gray-200 rounded-md px-1 h-4 text-[10px] whitespace-nowrap bg-gray-500 text-white flex items-center justify-center">
            임금
          </div>
          <div className="bg-gray-200 rounded-md px-1 h-4 text-[10px] whitespace-nowrap bg-gray-500 text-white flex items-center justify-center">
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
