import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CepDto {
  @ApiProperty({ example: '01001-000', description: 'CEP pesquisado' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'Praça da Sé', description: 'Logradouro' })
  logradouro: string;

  @ApiProperty({ example: 'São Paulo', description: 'Cidade' })
  localidade: string;

  @ApiProperty({ example: 'SP', description: 'Estado' })
  uf: string;
}
