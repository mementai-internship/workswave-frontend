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
    name: string;
  }[];
}

export interface IPatchLeaveCategory {
  leave_category: {
    id?: number;
    name: string;
    leave_count: number;
    is_paid: boolean;
    is_leave_of_absence: boolean;
  };
  excluded_create_ids: number[];
  excluded_delete_ids?: number[];
}
