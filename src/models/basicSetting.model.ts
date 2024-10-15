import { TUserAuthority } from '@/models/user.model';

export interface IBoardReponse {
  id: string;
  categoryName: string;
  categoryDesc: string;
  readAuthority: TUserAuthority;
  writeAuthority: TUserAuthority;
  notifyAuthority: TUserAuthority;
  partDivision: boolean;
  commentDivision: boolean;
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
  content: string | TUserAuthority;
}

export interface IBoardPostRequest {
  categoryName: string;
  categoryDesc: string;
  readAuthority: TUserAuthority;
  writeAuthority: TUserAuthority;
  notifyAuthority: TUserAuthority;
  partDivision: boolean;
  commentDivision: boolean;
}

// patch 와 put 여부에 따라 수정
// export interface IBoardItemPatchRequest extends Partial<IBoardReponse> {}
