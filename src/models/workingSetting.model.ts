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
