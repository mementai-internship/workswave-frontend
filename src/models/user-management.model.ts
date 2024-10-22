//id만 있는 타입들은 임의로 설정

export type TGetUsersResponse = {
  message: string;
  data: [
    {
      id: number;
      name: string;
      birth_date: string | null;
      phone_number: string;
      email: string;
      hire_date: string | null;
      monthly_salary: number;
      annual_salary: number;
      part: string;
      branch: string;
    },
  ];
  total: number;
  page: number;
  record_size: number;
};

export type TGetCurrentUserResponse = {
  data: TCurrentUserInfo;
};

export type TCurrentUserInfo = {
  address: string;
  birth_date: string;
  branch: {
    address: string;
    call_number: string;
    code: string;
    corporate_seal: string;
    created_at: string;
    deleted_yn: string;
    id: number;
    mail_address: string;
    name: string;
    nameplate: string;
    registration_number: string;
    representative_name: string;
    updated_at: string;
  };
  branch_id: number;
  created_at: string;
  deleted_yn: string;
  education: string;
  email: string;
  gender: string;
  hire_date: string;
  id: number;
  last_career_end_date: string;
  last_career_start_date: string;
  last_company: string;
  last_position: string;
  name: string;
  part: {
    branch_id: number;
    color: string;
    created_at: string;
    deleted_yn: string;
    id: number;
    is_doctor: boolean;
    leave_granting_authority: boolean;
    name: string;
    required_certification: string;
    task: string;
    updated_at: string;
  };
  part_id: number;
  password: string;
  phone_number: string;
  resignation_date: string;
  role: string;
  updated_at: string;
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

export type TPatchUserRoleRequest = {
  role: string;
};

export type TPatchUserRoleResponse = {
  id: number;
};

export type TGetBranchsResponse = {
  data: string[];
};

export type TGetPartsResponse = {
  data: string[];
};
