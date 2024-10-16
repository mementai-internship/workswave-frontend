//id만 있는 타입들은 임의로 설정

export type TGetUsersResponse = {
  id: number;
};

export type TPostUserRequest = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  education: string;
  birth_date: string;
  hire_date: string;
  resignation_date: string;
  gender: string;
  part_id: number;
  branch_id: number;
  last_company: string;
  last_position: string;
  last_career_start_date: string;
  last_career_end_date: string;
};

export type TPostUserResponse = {
  id: number;
};

export type TGetCurrentUserResponse = {
  id: number;
};

export type TGetUserDetailResponse = {
  id: number;
};

export type TPatchUserRequest = {
  name: string;
  email: string;
  phone_number: string;
  address: string;
  education: string;
  birth_date: string;
  hire_date: string;
  resignation_date: string;
  gender: string;
  part_id: number;
  branch_id: number;
  last_company: string;
  last_position: string;
  last_career_start_date: string;
  last_career_end_date: string;
};

export type TPatchUserResponse = {
  id: number;
};

export type TGetResignedUsersResponse = {
  id: number;
};

export type TPatchUserRoleRequest = {
  role: string;
};

export type TPatchUserRoleResponse = {
  id: number;
};
