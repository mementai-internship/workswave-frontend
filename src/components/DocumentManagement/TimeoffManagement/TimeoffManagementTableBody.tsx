import { Table } from '@radix-ui/themes';
import dayjs from 'dayjs';

import { Txt } from '@/components/Common/Txt';
import { ITimeoff_mock_type } from '@/constants/documentManagement/timeoffTable';

interface ITimeoffManagementTableBodyProps {
  timeoffData: ITimeoff_mock_type[];
}

export default function TimeoffManagementTableBody({
  timeoffData,
}: ITimeoffManagementTableBodyProps) {
  const cellClasses = 'text-center align-middle';

  const formatDate = (date: Date) => {
    return dayjs(date).format('YYYY-MM-DD');
  };

  return (
    <Table.Body>
      {timeoffData.map((row, i) => (
        <Table.Row key={row.id} className="h-20 text-base">
          <Table.Cell className={`w-12 ${cellClasses}`}>{timeoffData.length - i}</Table.Cell>
          <Table.Cell className={`w-24 ${cellClasses}`}>{row.branch}</Table.Cell>
          <Table.Cell className={cellClasses}>{row.name}</Table.Cell>
          <Table.Cell className={`w-24 ${cellClasses}`}>{row.part}</Table.Cell>
          <Table.Cell className={`w-52 ${cellClasses}`}>{formatDate(row.applyDate)}</Table.Cell>
          <Table.Cell
            className={`w-20 font-bold ${row.status === '복직' ? 'text-purple-800' : ''} ${cellClasses}`}
          >
            {row.status}
          </Table.Cell>
          <Table.Cell className={`w-72 ${cellClasses}`}>
            {row.status === '복직' ? (
              <div className="flex flex-col text-left pl-6">
                <Txt variant="body2">복직날짜</Txt>
                <Txt variant="body1">{formatDate(row.endDate)}</Txt>
              </div>
            ) : (
              <div className="flex flex-col text-left pl-6">
                <Txt variant="body2">휴직기간</Txt>
                <Txt variant="body1">
                  {formatDate(row.startDate)} - {formatDate(row.endDate)}
                </Txt>
              </div>
            )}
          </Table.Cell>
          <Table.Cell className={cellClasses}>
            <div className="flex flex-row w-full text-left gap-1">
              <Txt variant="caption">[{row.timeoffType}]</Txt>
              <Txt variant="caption">{row.timeoffTypeDetail}</Txt>
            </div>
            <div className="ml-8 text-left font-bold">{row.reason}</div>
          </Table.Cell>
          <Table.Cell className={cellClasses}>{row.manager}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
