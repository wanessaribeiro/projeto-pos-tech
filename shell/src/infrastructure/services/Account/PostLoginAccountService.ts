import { PostLoginAccountDTO } from '../../../domain/dtos/account.dto';

//TODO: hash da senha
export default async function PostLoginAccountService({
  email,
  password,
}: PostLoginAccountDTO) {
  const url = 'http://localhost:3333/accounts/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  return await response.json();
}
