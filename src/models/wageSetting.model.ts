export interface IWageSetting {
  templateName: string; // 템플릿명
  templateId?: string; // 템플릿 ID
  positionName?: string; // 직책명
  positionId?: number; // 직책 ID
  hireYear: number; // 입사년도
  isJanuaryHire: boolean; // 1월 입사 여부 (true: 1월 입사, false: 1월 입사 아님)
  workingDays: number; // 근무일 수
  monthlySalary: number; // 월 급여
  hourlyWage: number; // 시급
  baseSalary: number; // 기본급
  annualSalary: number; // 연봉
  includesHolidayAllowance: boolean; // 휴일수당 포함 여부 (true: 포함, false: 미포함)
  checksDutyAllowance: boolean; // 직무수당 체크 여부 (true: 적용, false: 미적용)
  weeklyRestHours: number; // 주휴시간
  annualAllowanceDays: number; // 연차수당 일수
  annualLeaveHours: number; // 연차 시간 (연차로 사용할 수 있는 총 시간)
  inclusiveOvertimeAllowance: number; // 포괄산정 연장근로수당 (금액)
  overtimeHDays: number; // 연장근무시간 (일수)
  annualAllowance: number; // 연차수당 (금액)
  holidayAllowance: number; // 휴일수당 (금액)
  holidayHours: number; // 휴일근로시간
  dutyAllowance: number; // 직무수당 (금액)
  mealAllowance: number; // 식대 (금액)
}
