import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class WeatherDto {
  @ApiProperty({ example: 'Rio de Janeiro', description: 'Nome da cidade' })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({ example: 'BR', description: 'Código do país' })
  @IsString()
  pais: string;

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
