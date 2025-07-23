import { PutEditTransactionDTO } from '../../../domain/dtos/transactions.dto';

export default async function PutEditTransactionService({
  token,
  transactionId,
  userId,
  value,
  type,
}: PutEditTransactionDTO) {
  const url =
    'http://localhost:3333/contas/' + userId + '/transacao/' + transactionId;

  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ value, type }),
  });
}
