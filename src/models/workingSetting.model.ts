export interface IWorkingSettingPartResponse {
  id: number;
  name: string;
  task: string;
  is_doctor: boolean;
  required_certification: boolean;
  leave_granting_authority?: boolean;
}

interface IWorkingSettingOTForm {
  doctor_ot_30: number;
  doctor_ot_60: number;
  doctor_ot_90: number;
  doctor_ot_120: number;
  common_ot_30: number;
  common_ot_60: number;
  common_ot_90: number;
  common_ot_120: number;
}

export interface IWorkingSettingAutoOTForm {
  top_manager_auto_applied: boolean;
  manager_auto_applied: boolean;
  employee_auto_applied: boolean;
}

interface IWorkingSettingBasicWorkForm {
  weekly_work_days: number;
  weekday_start_time: string;
  weekday_end_time: string;
  weekday_is_holiday: boolean;
  saturday_start_time: string;
  saturday_end_time: string;
  saturday_is_holiday: boolean;
  sunday_start_time: string;
  sunday_end_time: string;
  sunday_is_holiday: boolean;
  doctor_lunch_start_time: string;
  doctor_lunch_end_time: string;
  doctor_dinner_start_time: string;
  doctor_dinner_end_time: string;
  common_lunch_start_time: string;
  common_lunch_end_time: string;
  common_dinner_start_time: string;
  common_dinner_end_time: string;
}

export interface IWorkingSettingBranchResponse {
  ot: IWorkingSettingOTForm;
  auto_ot: IWorkingSettingAutoOTForm;
  do_holiday_work: boolean;
  doctor_holiday_work_pay: number;
  common_holiday_work_pay: number;
  basic_work: IWorkingSettingBasicWorkForm;
  comprehensive_overtime: boolean;
  annual_leave: boolean;
  holiday_work: boolean;
  job_duty: boolean;
  meal: boolean;
}
