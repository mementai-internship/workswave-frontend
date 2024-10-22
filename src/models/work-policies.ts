export interface IWorkPolicies {
  overtime_policies: {
    doctor_ot_30: number;
    doctor_ot_60: number;
    doctor_ot_90: number;
    doctor_ot_120: number;
    common_ot_30: number;
    common_ot_60: number;
    common_ot_90: number;
    common_ot_120: number;
  };
  auto_overtime_policies: {
    // top_auto_applied
    // total_auto_applied
    // part_auto_applied
    top_manager_auto_applied: boolean;
    manager_auto_applied: boolean;
    employee_auto_applied: boolean;
  };
  holiday_allowance_policies: {
    doctor_holiday_work_pay: number;
    common_holiday_work_pay: number;
  };
  work_policies: {
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
  };
  comprehensive_overtime: boolean;
  holiday_work_policies: {
    do_holiday_work: false;
  };
  default_allowance_policies: {
    comprehensive_overtime: boolean;
    annual_leave: boolean;
    holiday_work: boolean;
    job_duty: boolean;
    meal: boolean;
  };
}
