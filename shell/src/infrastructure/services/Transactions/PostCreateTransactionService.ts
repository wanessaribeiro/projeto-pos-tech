import { PostCreateTransactionDTO } from '../../../domain/dtos/transactions.dto';

export default async function PostCreateTransactionService({
  token,
  userId,
  transactionId,
  value,
  type,
}: PostCreateTransactionDTO) {
  const url = 'http://localhost:3333/accounts/' + userId + '/transaction';

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ id: transactionId, value, type }),
  });
}
