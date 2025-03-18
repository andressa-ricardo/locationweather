import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class LocationWeatherDto {
  @ApiProperty({ example: '01001-000', description: 'CEP pesquisado' })
  @IsString()
  @IsNotEmpty()
  cep: string;

  @ApiProperty({ example: 'São Paulo', description: 'Nome da cidade' })
  @IsString()
  cidade: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Estado correspondente ao CEP',
  })
  @IsString()
  estado: string;

  @ApiProperty({ example: 'Sudeste', description: 'Região do estado' })
  @IsString()
  regiao: string;

  @ApiProperty({ example: '25 °C', description: 'Temperatura atual' })
  @IsString()
  temperatura: string;

  @ApiProperty({ example: 'nublado', description: 'Descrição do clima' })
  @IsString()
  descricao: string;

  @ApiProperty({ example: '60%', description: 'Umidade do ar' })
  @IsString()
  umidade: string;

  @ApiProperty({ example: '5 m/s', description: 'Velocidade do vento' })
  @IsString()
  vento: string;
}
