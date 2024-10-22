export interface IHourWageTemplatesResponse {
  id: number;
  part_id: number;
  name: string;
  start_time: string;
  end_time: string;
  hour_wage: number;
  home_hour_wage: number;
}

export interface IHourWageTemplatesRequest {
  part_id: number;
  name: string;
  start_time: string;
  end_time: string;
  hour_wage: number;
  home_hour_wage: number;
}

export interface IPatchHourWageTemplatesProps {
  branchId?: number;
  templateId: number;
  data: IHourWageTemplatesRequest;
}

export interface IHourWageTemplatesForm {
  id?: number;
  part_id: number;
  name: string;
  start_time_hour: number;
  start_time_minutes: number;
  end_time_hour: number;
  end_time_minutes: number;
  hour_wage: number;
  home_hour_wage: number;
}
