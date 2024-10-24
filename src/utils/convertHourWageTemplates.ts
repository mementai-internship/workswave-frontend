import { IHourWageTemplatesForm, IHourWageTemplatesResponse } from '@/models/hour-wage-templates';

export const convertTemplateToForm = (
  template: IHourWageTemplatesResponse
): IHourWageTemplatesForm => {
  const [startHour, startMinute] = template.start_time.split(':');
  const [endHour, endMinute] = template.end_time.split(':');

  return {
    id: template.id ?? null,
    part_id: template.part_id,
    name: template.name,
    start_time_hour: Number(startHour),
    start_time_minutes: Number(startMinute),
    end_time_hour: Number(endHour),
    end_time_minutes: Number(endMinute),
    hour_wage: template.hour_wage,
    home_hour_wage: template.home_hour_wage,
  };
};

export const convertFormToTemplate = (data: IHourWageTemplatesForm): IHourWageTemplatesResponse => {
  const formattedTime = (value: number) => value.toString().padStart(2, '0');
  return {
    id: data.id ?? null,
    part_id: Number(data.part_id),
    name: data.name,
    start_time: `${formattedTime(data.start_time_hour)}:${formattedTime(data.start_time_minutes)}`,
    end_time: `${formattedTime(data.end_time_hour)}:${formattedTime(data.end_time_minutes)}`,
    hour_wage: Number(data.hour_wage),
    home_hour_wage: Number(data.home_hour_wage),
  };
};
