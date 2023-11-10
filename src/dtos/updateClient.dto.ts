import { CreateClientDto } from './сreateClient.dto';

export class UpdateClientDto extends CreateClientDto {
  id: string;

  constructor(body: UpdateClientDto) {
    super(body);
    this.id = body?.id;
  }
}
