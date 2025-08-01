export interface PostCreateAccountDTO {
  name: string;
  email: string;
  password: string;
}

export interface PostLoginAccountDTO {
  email: string;
  password: string;
}

export interface GetAccountDTO {
  token: string;
}
