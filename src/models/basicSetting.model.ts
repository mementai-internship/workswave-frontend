export interface IBoardReponse {
  id: string;
  title: string;
  subTitle: ISubTitle[];
}

export interface IHumanRecordResponse {
  id: string;
  title: string;
  subTitle: ISubTitle;
}

export interface IHolidayResponse {
  id: string;
  subTitle: ISubTitle[];
}

export interface IAnnualLeaveResponse {
  id: string;
  title: string;
  subTitle: ISubTitle[];
}

interface ISubTitle {
  title: string;
  content: string;
}
