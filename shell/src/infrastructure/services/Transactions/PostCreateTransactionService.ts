import { PostCreateTransactionDTO } from '../../../domain/dtos/transactions.dto';

export default async function PostCreateTransactionService({
  token,
  userId,
  value,
  type,
}: PostCreateTransactionDTO) {
  const url = 'http://localhost:3333/contas/' + userId + '/transacao';

  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ value, type }),
  });
}
