import { ILeavePolicy, ILeavePolicyResponse } from '@/models/leave-policies.model';

export function adaptLeavePolicy(data: ILeavePolicy): ILeavePolicyResponse {
  const adaptedData: ILeavePolicyResponse = {
    auto_approval_policies: data.auto_approval_policies,
    account_based_policies: data.account_based_policies,
    entry_date_based_policies: data.entry_date_based_policies,
    condition_based_policies: data.condition_based_policies,
    manual_based_parts: data.manual_based_parts.part_ids.map(({ id, name }) => ({ id, name })),
  };

  return adaptedData;
}
