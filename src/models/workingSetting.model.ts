import { ICommuteData, IWorkStatistics } from '@/models/work.model';

export interface IWorkingSettingPartResponse {
  id: number;
  name: string;
  task: string;
  is_doctor: boolean;
  required_certification: boolean;
  leave_granting_authority: boolean;
}

export interface IWorkingSettingPartForm {
  id: number;
  name: string;
  task: string;
  is_doctor: boolean;
  required_certification: boolean;
}

export interface DetailCommuteRecordProps {
  statistics: IWorkStatistics;
  selectedEmployee: ICommuteData;
  showAllStatus: boolean;
  setShowAllStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StatisticItemProps {
  label: string;
  value: number;
  selectedEmployee?: ICommuteData;
  showAllStatus: boolean;
}
