export type TBranchClosedDaysRequest = {
  branch_id: number;
  date: Date;
  memo?: string | null;
};

export type TClosedDaysResponse = {
  message: string;
  data: Array<{
    branch_id: number;
    user_id: number;
    id: number;
    created_at: string;
    updated_at: string;
    closed_day_date: string;
    part_id: number | null;
    memo: string;
    is_sunday: boolean | null;
    deleted_yn: string;
  }>;
};
