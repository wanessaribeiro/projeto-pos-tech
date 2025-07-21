export interface PostCreateTransactionDTO {
  token: string;
  userId: string;
  value: number;
  type: string;
}

export interface PutEditTransactionDTO {
  id: string;
  value: number;
  type: string;
}

export interface DeleteTransactionDTO {
  id: string;
}
