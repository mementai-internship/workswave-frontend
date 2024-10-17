import { IHolidaySetting } from '@/models/holidaySetting.model';

export const MOCK_HOLIDAY_SETTINGS: IHolidaySetting[] = [
  {
    id: 1,
    name: '설날',
    leave_count: 3,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 2,
    name: '추석',
    leave_count: 3,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 3,
    name: '근로자의 날',
    leave_count: 1,
    is_paid: false,
    is_leave_of_absence: false,
  },
  {
    id: 4,
    name: '광복절',
    leave_count: 1,
    is_paid: false,
    is_leave_of_absence: false,
  },
  {
    id: 5,
    name: '크리스마스',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 6,
    name: '어린이날',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 7,
    name: '현충일',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 8,
    name: '개천절',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: false,
  },
  {
    id: 9,
    name: '한글날',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: true,
  },
  {
    id: 10,
    name: '창립기념일',
    leave_count: 1,
    is_paid: true,
    is_leave_of_absence: true,
  },
];
