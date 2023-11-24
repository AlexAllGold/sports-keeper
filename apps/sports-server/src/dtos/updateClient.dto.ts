import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateClientDto } from './сreateClient.dto';

export class UpdateClientDto extends CreateClientDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  constructor(body: UpdateClientDto) {
    super(body);
    this.id = body?.id;
  }
}
