import { ILeavePolicy, ILeavePolicyResponse } from '@/models/leave-policies.model';
import { IPartsResponse } from '@/models/parts';

import { ILeaveCategory, IPatchLeaveCategory } from '../models/leave-categories.model';

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

export function adaptLeaveCategory(
  data: ILeaveCategory,
  parts: IPartsResponse[],
  isEditingMode: boolean
): IPatchLeaveCategory {
  if (isEditingMode) {
    const adaptedData: IPatchLeaveCategory = {
      leave_category: {
        id: data.leave_category.id,
        name: data.leave_category.name,
        leave_count: data.leave_category.leave_count,
        is_paid: data.leave_category.is_paid,
        is_leave_of_absence: data.leave_category.is_leave_of_absence,
      },
      excluded_create_ids: data.excluded_parts
        .map((part) => part.id)
        .filter((id): id is number => !!id),
      excluded_delete_ids: parts
        .filter((part) => !data.excluded_parts.some((p) => p.id === part.id))
        .map((part) => part.id),
    };
    return adaptedData;
  } else {
    const adaptedData: IPatchLeaveCategory = {
      leave_category: {
        name: data.leave_category.name,
        leave_count: data.leave_category.leave_count,
        is_paid: data.leave_category.is_paid,
        is_leave_of_absence: data.leave_category.is_leave_of_absence,
      },
      excluded_create_ids: data.excluded_parts.map((part) => part.id),
    };
    return adaptedData;
  }
}
