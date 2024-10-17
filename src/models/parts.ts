export interface IPartsForm {
  name: string;
  task: string;
  is_doctor: boolean;
  color: string;
  required_certification: boolean;
}
export interface IPartsResponse extends IPartsForm {
  id: number;
  leave_granting_authority?: boolean;
}
