export interface ILeaveCategory {
  leave_category: {
    id: number;
    branch_id?: number;
    name: string;
    leave_count: number;
    is_paid: boolean;
    is_leave_of_absence: boolean;
  };
  excluded_parts: {
    id: number;
    part_name: string;
  }[];
}
