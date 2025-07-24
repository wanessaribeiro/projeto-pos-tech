import { PostCreateAccountDTO } from '../../../domain/dtos/account.dto';

export default async function PostCreateAccountService({
  name,
  email,
  password,
}: PostCreateAccountDTO) {
  const url = 'http://localhost:3333/accounts';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });

  return response;
}
