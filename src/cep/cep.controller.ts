import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { CepService } from './cep.service';
import { ApiTags, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CepDto } from './cep.dto';

@ApiTags('CEP')
@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get()
  @ApiQuery({ name: 'cep', type: String, required: true, example: '01001-000' })
  @ApiResponse({ status: 200, description: 'Dados do CEP', type: CepDto })
  @ApiResponse({ status: 400, description: 'Parâmetro "cep" é obrigatório' })
  @ApiResponse({ status: 404, description: 'CEP não encontrado' })
  async getCep(@Query('cep') cep: string): Promise<CepDto> {
    if (!cep) {
      throw new BadRequestException('O parâmetro "cep" é obrigatório.');
    }
    return this.cepService.getCepInfo(cep);
  }
}
