export interface IOfficeItemResponse {
  id: number;
  code: string;
  name: string;
  representative_name: string;
  registration_number: string;
  call_number: string;
  address: string;
  corporate_seal: string | undefined;
  nameplate: string | undefined;
  mail_address: string;
  created_at: string;
  updated_at: string;
  deleted_yn: string;
}
