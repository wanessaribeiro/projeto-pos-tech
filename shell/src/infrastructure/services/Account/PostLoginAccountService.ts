import { PostLoginAccountDTO } from '../../../domain/dtos/account.dto';

//TODO: hash da senha
export default async function PostLoginAccountService({
  email,
  password,
}: PostLoginAccountDTO) {
  const url = 'http://localhost:3333/contas/login';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  //TODO: tratamento de erro
  return await response.json();
}
