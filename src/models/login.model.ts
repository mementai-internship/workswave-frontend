export type TLoginReqBody = {
  email: string;
  password: string;
};

export type TLoginResBody = {
  message: string;
  access_token: string;
  token_type: string;
};
