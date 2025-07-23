export interface PostCreateTransactionDTO {
  token: string;
  userId: string;
  transactionId: string;
  value: number;
  type: string;
}

export interface PutEditTransactionDTO {
  token: string;
  userId: string;
  transactionId: string;
  value: number;
  type: string;
}

export interface DeleteTransactionDTO {
  token: string;
  userId: string;
  transactionId: string;
}
