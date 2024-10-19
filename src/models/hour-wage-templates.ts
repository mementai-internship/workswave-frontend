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
  part_id: 0;
  name: 'string';
  start_time: '08:29:04.677Z';
  end_time: '08:29:04.677Z';
  hour_wage: 0;
  home_hour_wage: 0;
}

export interface IPatchHourWageTemplatesProps {
  branchId?: number;
  templateId: number;
  data: IHourWageTemplatesRequest;
}
