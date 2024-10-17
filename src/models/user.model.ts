//"MSO 최고권한", "통합관리자", "파트관리자", "사원"
export type TUserAuthority = 'MSO 최고권한' | '통합관리자' | '파트관리자' | '사원';

export type TUserRole = 'MSO 최고권한' | '최고관리자' | '관리자' | '사원' | '퇴사자';

export type TUserResBody = {
  message: string;
  data: TUser;
};

export type TUser = {
  phone_number: string;
  part_id: number;
  created_at: string;
  id: number;
  address: string;
  updated_at: string;
  education: string;
  branch_id: number;
  last_company: string;
  deleted_yn: string;
  birth_date: Date;
  hire_date: Date;
  last_position: string;
  resignation_date: Date;
  role: TUserRole;
  last_career_start_date: Date;
  email: string;
  name: string;
  gender: string;
  last_career_end_date: Date;
  branch: TBranch;
  part: TPart;
};

export type TBranch = {
  nameplate: string;
  code: string;
  mail_address: string;
  name: string;
  created_at: string;
  representative_name: string;
  updated_at: string;
  registration_number: string;
  deleted_yn: string;
  call_number: string;
  address: string;
  id: number;
  corporate_seal: string;
};

export type TPart = {
  id: number;
  is_doctor: number;
  created_at: string;
  deleted_yn: string;
  required_certification: number;
  name: string;
  task: string;
  leave_granting_authority: number;
  branch_id: number;
  updated_at: string;
};
