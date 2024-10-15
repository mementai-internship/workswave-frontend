export interface IHourlyRangeItem {
  templateId: number;
  templateName: string;
  positionId: string;
  startTime: string;
  endTime: string;
  hourlyWage: number;
  remoteHourlyWage: number;
}

export interface IHourlyRangeItemSplitTime extends IHourlyRangeItem {
  positionName: string;
  startTimeHour: string;
  startTimeMinute: string;
  endTimeHour: string;
  endTimeMinute: string;
}
