export interface IHrResponse {
  id: number;
  name: string;
  categoryDivision: boolean;
}

export interface IHrRequest {
  id?: number;
  name: string;
  categoryDivision: boolean;
}
