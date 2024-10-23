export type TSalaryTemplatesResponse = ISalaryTemplatesItem[];

export interface ISalaryTemplatesItem {
  id: number; // 템플릿 아이디
  part_id: number; // 직책 아이디
  part_name: string; // 직책 이름
  name: string; // 템플릿 이름
  is_january_entry: boolean; // 1월 입사여부
  weekly_work_days: number; // 주 근무일
  month_salary: number; // 월급
  included_holiday_allowance: boolean; // 휴일수당 포함 여부
  included_job_allowance: boolean; // 작무수당 포함 여부
  hour_wage: number; // 시급
  basic_salary: number; // 기본급
  contractual_working_hours: number; // 계약된 근로시간
  weekly_rest_hours: number; // 주휴 시간
  annual_salary: number; // 연봉
  comprehensive_overtime_allowance: number; // 포괄 연장 근로 수당
  comprehensive_overtime_hour: number; // 포괄 연장 근로 시간
  annual_leave_allowance: number; // 연차 수당
  annual_leave_allowance_hour: number; // 연차 시간
  annual_leave_allowance_day: number; // 연차 일수

  // 빠져있는 부분
  // 식대
  // 직무 수당
  // 휴일 수당
  // 고용연도
}
