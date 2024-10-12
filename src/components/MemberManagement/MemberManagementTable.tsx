import { MEMBERMANAGEMENTTABLETITLE } from '@/constants/memberManagementTableTitle';
import calculateWorkPeriod from '@/utils/calculateWorkPeriod';
import { Table } from '@radix-ui/themes';
import { PiClipboardText, PiPaperclip, PiXBold } from 'react-icons/pi';

interface IMemberManagementTableProps {
  id: number;
  branch: string;
  gender: string;
  name: string;
  workPart: string;
  birth: string;
  phone: string;
  email: string;
  contractPeriod: {
    start: string;
    end: string;
    workContract: string;
    annualSalaryContract: string;
    recentContract: string;
    annualSalary: string;
    salary: string;
  };
}

//text data 추후 삭제 예정
const testData: IMemberManagementTableProps[] = [
  {
    id: 1,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 2,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 3,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
  {
    id: 4,
    branch: '뮤즈의원(수원인계점)',
    gender: '남',
    name: '최원준',
    workPart: 'Developer',
    birth: '2024-01-01',
    phone: '010-1234-5678',
    email: 'test@test.com',
    contractPeriod: {
      start: '2024-01-01',
      end: '-',
      workContract: '2024-01-01 ~ 2024-10-01',
      annualSalaryContract: '2024-01-01 ~ 2024-10-01',
      recentContract: '-',
      annualSalary: '40,000,000',
      salary: '4,000,000',
    },
  },
];

export default function MemberManagementTable() {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row className="bg-gray-300">
          {MEMBERMANAGEMENTTABLETITLE.map((title) => (
            <Table.ColumnHeaderCell className="p-2 text-center align-middle" key={title}>
              {title}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {testData.map((testData: IMemberManagementTableProps) => (
          <Table.Row key={testData.id}>
            <Table.RowHeaderCell className="text-center p-4 align-middle">
              {testData.id}
            </Table.RowHeaderCell>
            <Table.Cell className="text-center p-4 align-middle">{testData.branch}</Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">
              {testData.gender} {testData.name}
            </Table.Cell>
            <Table.Cell className="p-4 align-middle">{testData.workPart}</Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">{testData.birth}</Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">{testData.phone}</Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">{testData.email}</Table.Cell>
            <Table.Cell>
              <div className="flex flex-col justify-between gap-2 align-middle p-1">
                <div className="flex justify-between gap-2">
                  <p>[입사일] {testData.contractPeriod.start}</p>
                  <p className="w-40">
                    [퇴사일] <span className="text-center">{testData.contractPeriod.end}</span>
                  </p>
                  <p>[연봉] {testData.contractPeriod.annualSalary}</p>
                  <p>[월급] {testData.contractPeriod.salary}</p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-50">
                    [근로계약일] {testData.contractPeriod.workContract}
                  </p>
                  <p className="text-xs text-gray-50">
                    [연봉계약일] {testData.contractPeriod.annualSalaryContract}
                  </p>
                  <p className="text-xs text-gray-50">
                    [최근면담일] {testData.contractPeriod.recentContract}
                  </p>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell className="text-left p-4 align-middle">
              {calculateWorkPeriod(
                testData.contractPeriod.start.toString(),
                testData.contractPeriod.end.toString()
              )}
            </Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">
              <button>
                <PiPaperclip className="w-8 h-8 bg-gray-10 rounded-full p-1" />
              </button>
              <button>
                <PiClipboardText className="w-8 h-8 bg-gray-10 rounded-full p-1" />
              </button>
            </Table.Cell>
            <Table.Cell className="text-center p-4 align-middle">
              <button>
                <PiXBold />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
