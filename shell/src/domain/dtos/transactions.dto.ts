export interface PostCreateTransactionDTO {
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
