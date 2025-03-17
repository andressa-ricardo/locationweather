import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty({ example: 'Rio de Janeiro', description: 'Nome da cidade' })
  cidade: string;

  @ApiProperty({ example: 'BR', description: 'Código do país' })
  pais: string;

  @ApiProperty({ example: '25 °C', description: 'Temperatura atual' })
  temperatura: string;

  @ApiProperty({ example: 'nublado', description: 'Descrição do clima' })
  descricao: string;

  @ApiProperty({ example: '60%', description: 'Umidade do ar' })
  umidade: string;

  @ApiProperty({ example: '5 m/s', description: 'Velocidade do vento' })
  vento: string;
}
