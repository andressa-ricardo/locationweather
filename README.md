# Weather API

Este projeto é um serviço de consulta de clima que consome dados da API OpenWeather.

##  Tecnologias Utilizadas

- **Node.js**
- **NestJS**
- **Axios**
- **Docker e Docker Compose**

##  Instalação

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

##  Rodando a Aplicação

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

##  Como Usar

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
  "estado": "Não disponível",
  "pais": "BR",
  "temperatura": "30 °C",
  "descricao": "céu limpo",
  "umidade": "60 %",
  "vento": "2.5 m/s"
}
```

##  Considerações
- Caso a cidade não seja encontrada, a API retornará um erro `404`.
- Certifique-se de que sua API Key do OpenWeather está válida.

