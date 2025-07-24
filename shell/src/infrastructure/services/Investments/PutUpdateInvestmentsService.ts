import { PutUpdateInvestmentsDTO } from '../../../domain/dtos/investments.dto';

export default async function PutUpdateInvestmentsService({
  token,
  userId,
  data,
}: PutUpdateInvestmentsDTO) {
  const url = 'http://localhost:3333/accounts/' + userId + '/investment';

  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify({ ...data }),
  });
}
