import { GetAccountDTO } from '../../../domain/dtos/account.dto';

export default async function GetAccountService({ id, token }: GetAccountDTO) {
  const url = 'http://localhost:3333/contas/' + id;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });

  return await response.json();
}
