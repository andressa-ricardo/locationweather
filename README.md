# LocationWeather API

Este projeto é um serviço de consulta de clima que consome dados da API OpenWeather e agora inclui funcionalidades para buscar informações climáticas a partir de CEPs brasileiros, além de um serviço dedicado apenas à consulta de CEPs.

## Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **Axios**
- **Docker e Docker Compose**

## Instalação

1. **Clone o repositório**
   ```sh
   git clone https://github.com/seu-usuario/weather-api.git
   cd weather-api
   ```

2. **Instale as dependências**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do OpenWeather:
   ```env
   OPENWEATHER_API_KEY=SEU_API_KEY_AQUI
   ```

## Obtendo a API Key do Open Weather
Para utilizar a API, é necessário obter uma API Key do site. Siga os passos abaixo:

1. **Acesse o site**
   - Vá para https://openweathermap.org/ e crie uma conta caso ainda não tenha uma.

2. **Cadastre-se ou faça login**
   - Se já tiver uma conta, basta fazer login. Caso contrário, clique em "Registrar" e siga o processo de cadastro.

3. **Obtenha sua API Key**
   - Após o login, vá para a seção "My profile" ou "My API Keys" no painel do usuário.
   - Clique em "Gerar nova chave" e copie o código gerado.

4. **Configure no projeto**
   - No arquivo `.env`, substitua `SEU_API_KEY_AQUI` pela chave gerada.

## Rodando a Aplicação

### Rodando Localmente (Sem Docker)
```sh
npm run dev
```
A aplicação estará disponível em `http://localhost:3000`.

### Rodando com Docker
1. **Construa e inicie os containers**
   ```sh
   docker-compose up --build
   ```
2. Acesse a API em `http://localhost:3000`.

## Documentação com Swagger
A documentação da API está disponível no Swagger. Após iniciar a aplicação, acesse:

```
http://localhost:3000/api
```

## Como Usar

### Consultar clima de uma cidade

**Endpoint:** `GET /weather?city={NOME_DA_CIDADE}`

**Exemplo:**
```sh
curl http://localhost:3000/weather?city=Rio%20de%20Janeiro
```

**Resposta esperada:**
```json
{
  "cidade": "Rio de Janeiro",
  "pais": "BR",
  "temperatura": "30 °C",
  "descricao": "céu limpo",
  "umidade": "60 %",
  "vento": "2.5 m/s"
}
```

### Consultar apenas informações de CEP (Apenas Brasil)

**Endpoint:** `GET /cep/{CEP}`

**Exemplo:**
```sh
curl http://localhost:3000/cep/01000-000
```

**Resposta esperada:**
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "unidade": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
}
```


### Serviço Location-Weather (Junção de CEP e Clima)
A funcionalidade `location-weather` permite obter diretamente os dados climáticos apenas informando um CEP brasileiro. O sistema identifica automaticamente a localização e busca as condições climáticas na OpenWeather.

**Endpoint:** `GET /location-weather?cep={CEP}`

**Exemplo:**
```sh
curl http://localhost:3000/location-weather?cep=01000-000
```

**Resposta esperada:**
```json
{
  "cep": "01001-000",
  "cidade": "São Paulo",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "temperatura": "27.51 °C",
  "descricao": "clear sky",
  "umidade": "67 %",
  "vento": "2.57 m/s"
}
```

## Considerações
- Apenas CEPs brasileiros são aceitos para a funcionalidade de busca por CEP.
- Caso o CEP seja inválido ou não encontrado, a API retornará um erro `404`.
- Certifique-se de que sua API Key do OpenWeather está válida.
---

## Autor

- **LinkedIn:** [Andressa Ricardo](https://www.linkedin.com/in/andressa-ricardo/)
- **GitHub:** [andressa-ricardo](https://github.com/andressa-ricardo)