//TODO: adicionar nome
interface CreateAccountDTO {
  email: string;
  password: string;
}

//TODO: hash da senha
export default async function PostCreateAccountService({
  email,
  password,
}: CreateAccountDTO) {
  const url = 'http://localhost:3333/contas';

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha: password }),
  });
}
