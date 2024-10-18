export interface IBranchesResponse {
  list: IBranchResponse[];
  pagination: {
    record_size: number;
    total_record: number;
  };
}

export interface IBranchResponse {
  id: number;
  code: string;
  name: string;
  representative_name: string;
  registration_number: string;
  call_number: string;
  address: string;
  corporate_seal: string;
  nameplate: string;
  mail_address: string;
  created_at: string;
  updated_at: string;
  deleted_yn: string;
}

export interface IBranchesRequest {
  code: string;
  name: string;
  representative_name: string;
  registration_number: string;
  call_number: string;
  address: string;
  corporate_seal: string;
  nameplate: string | null;
  mail_address: string;
}
