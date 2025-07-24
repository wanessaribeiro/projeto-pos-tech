import { DeleteTransactionDTO } from '../../../domain/dtos/transactions.dto';

export default async function DeleteTransactionService({
  token,
  transactionId,
  userId,
}: DeleteTransactionDTO) {
  const url =
    'http://localhost:3333/accounts/' +
    userId +
    '/transaction/' +
    transactionId;

  await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
}
