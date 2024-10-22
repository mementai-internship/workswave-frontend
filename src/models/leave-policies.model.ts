export interface IPartId {
  id: number;
  name: string;
  isGhosting?: boolean;
}
interface IBaseCategory {
  category: string;
  part_ids: IPartId[];
}

interface IAccountBasedPolicies extends IBaseCategory {
  categoryId: 'account_based_policies';
  account_based_january_1st: '초기화' | '다음해로 이월';
  account_based_less_than_year: '당해년도 일괄 부여' | '매 월 1개씩 부여';
  account_based_decimal_point: '올림' | '절삭' | '반올림' | '0.5 기준 올림';
}

interface IEntryBasedPolicies extends IBaseCategory {
  categoryId: 'entry_based_policies';
  entry_date_based_remaining_leave: '초기화' | '다음해로 이월';
}

interface IConditionBasedPolicies extends IBaseCategory {
  categoryId: 'condition_based_policies';
  condition_based_month: number;
  condition_based_cnt: number;
  condition_based_type: '월' | '일';
}

interface IManualBasedParts extends IBaseCategory {
  categoryId: 'manual_based_parts';
}
interface IAutoApprovalPolicies {
  top_auto_approval: boolean;
  total_auto_approval: boolean;
  part_auto_approval: boolean;
}

export type TPolicyDetailsType =
  | IAccountBasedPolicies
  | IEntryBasedPolicies
  | IConditionBasedPolicies
  | IManualBasedParts;

export interface ILeavePolicyResponse {
  auto_approval_policies: IAutoApprovalPolicies;
  account_based_policies: {
    categoryId: string;
    category: string;
    account_based_january_1st: '초기화' | '다음해로 이월';
    account_based_less_than_year: '당해년도 일괄 부여' | '매 월 1개씩 부여';
    account_based_decimal_point: '올림' | '절삭' | '반올림' | '0.5 기준 올림';
    part_ids: IPartId[];
  };
  entry_date_based_policies: {
    categoryId: string;
    category: string;
    entry_date_based_remaining_leave: '초기화' | '다음해로 이월';
    part_ids: IPartId[];
  };

  condition_based_policies: {
    categoryId: string;
    category: string;
    condition_based_month: number;
    condition_based_cnt: number;
    condition_based_type: '월' | '일';
    part_ids: IPartId[];
  };
  manual_based_parts: IPartId[];
}

export interface ILeavePolicy {
  auto_approval_policies: IAutoApprovalPolicies;
  account_based_policies: {
    categoryId: string;
    category: string;
    account_based_january_1st: '초기화' | '다음해로 이월';
    account_based_less_than_year: '당해년도 일괄 부여' | '매 월 1개씩 부여';
    account_based_decimal_point: '올림' | '절삭' | '반올림' | '0.5 기준 올림';
    part_ids: IPartId[];
  };
  entry_date_based_policies: {
    categoryId: string;
    category: string;
    entry_date_based_remaining_leave: '초기화' | '다음해로 이월';
    part_ids: IPartId[];
  };

  condition_based_policies: {
    categoryId: string;
    category: string;
    condition_based_month: number;
    condition_based_cnt: number;
    condition_based_type: '월' | '일';
    part_ids: IPartId[];
  };
  manual_based_parts: {
    categoryId: string;
    category: string;
    part_ids: IPartId[];
  };
}
