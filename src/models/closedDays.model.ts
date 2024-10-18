export interface IClosedDayRequest {
  branch_id: number;
  date?: Date;
  memo?: string | null;
}
export interface IClosedDaysRequest extends IClosedDayRequest {
  dates: Date[];
}
export interface IClosedDayDeleteRequest extends IClosedDayRequest {
  id: number;
}

export interface IClosedDaysDeleteRequest extends IClosedDayRequest {
  idList: number[];
}

export type TClosedDay = {
  branch_id: number;
  closed_day_date: Date;
  created_at: string;
  deleted_yn: string;
  id: number;
  memo: string;
  part_id: number | null;
  updated_at: string;
  user_id: number | null;
};

export type TClosedDaysResponse = {
  message: string;
  data: TClosedDay[];
};
