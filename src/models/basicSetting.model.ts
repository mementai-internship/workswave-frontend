import { TUserAuthority } from '@/models/user.model';

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

export interface IBoardPostRequest {
  categoryName: string;
  categoryDesc: string;
  readAuthority: TUserAuthority;
  writeAuthority: TUserAuthority;
  notifyAuthority: TUserAuthority;
  isPartDivision: boolean;
  isCommentDivision: boolean;
}
