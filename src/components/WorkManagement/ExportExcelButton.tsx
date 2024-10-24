import { CSVLink } from 'react-csv';
import { SiMicrosoftexcel } from 'react-icons/si';

import { IWorkData } from '@/models/work.model';

interface IExportExcelButtonProps {
  data: IWorkData[];
}

function ExportExcelButton({ data }: IExportExcelButtonProps) {
  const createCSVData = (data: IWorkData[]) => {
    if (data.length === 0) return [];

    const headers = Object.keys(data[0]);

    const rows = data.map((item) => Object.values(item));

    return [headers, ...rows];
  };
  const csvData = createCSVData(data);

  return (
    <CSVLink data={csvData} filename={'work_users.csv'}>
      <div className="fixed flex items-center justify-center p-2 text-sm font-bold bg-white rounded-lg shadow-md w-30 gap-x-2 bottom-10 right-10">
        <SiMicrosoftexcel color="green" size={25} />
        다운로드
      </div>
    </CSVLink>
  );
}

export default ExportExcelButton;
