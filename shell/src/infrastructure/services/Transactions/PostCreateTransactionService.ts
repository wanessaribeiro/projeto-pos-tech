import { PostCreateTransactionDTO } from '../../../domain/dtos/transactions.dto';

export default async function PostCreateAccountService({
  value,
  type,
}: PostCreateTransactionDTO) {
  const url = 'http://localhost:3333/contas';

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ valor: value, tipo: type }),
  });
}
