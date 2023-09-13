# Documentação do Bot do Telegram

Esta documentação fornece uma visão geral de um bot do Telegram implementado usando Node.js e várias bibliotecas. O bot envia periodicamente mensagens e responde a comandos de usuário. Abaixo, você encontrará informações sobre a funcionalidade do bot, endpoints e componentes importantes.

## Tabela de Conteúdos
1. [Visão Geral do Projeto](#visao-geral-do-projeto)
2. [Dependências](#dependencias)
3. [Funcionalidade do Bot](#funcionalidade-do-bot)
4. [Endpoints da API](#endpoints-da-api)
5. [Registro de Logs](#registro-de-logs)
6. [Tarefas Agendadas](#tarefas-agendadas)

---

## 1. Visão Geral do Projeto <a name="visao-geral-do-projeto"></a>

Este projeto é um bot do Telegram construído usando Node.js, que possui várias finalidades. Ele envia mensagens automáticas em intervalos especificados, responde a comandos de usuário e possui um servidor HTTP para funcionalidades adicionais.

## 2. Dependências <a name="dependencias"></a>

O projeto utiliza as seguintes dependências:

- `express`: Um framework de aplicação web Node.js.
- `body-parser`: Middleware para análise de JSON em solicitações HTTP.
- `node-telegram-bot-api`: Uma biblioteca para interagir com a API do Telegram Bot.
- `node-cron`: Um agendador semelhante ao cron para executar tarefas em intervalos específicos.
- `axios`: Um cliente HTTP baseado em promessas para fazer solicitações HTTP.
- `winston`: Uma biblioteca de registro versátil.
- `dotenv`: Uma biblioteca para carregar variáveis de ambiente de um arquivo `.env`.

## 3. Funcionalidade do Bot <a name="funcionalidade-do-bot"></a>

O bot do Telegram possui a seguinte funcionalidade:

- Ele responde ao comando "/start" com uma mensagem de boas-vindas.
- Ele envia mensagens automáticas para um grupo do Telegram em intervalos especificados.
- A função `enviarMensagemAutomatica` envia uma mensagem com um link para um site.
- A função `finalizarEnvioDeMensagens` envia uma mensagem de conclusão após um certo atraso.
- A função `mensagemAguarde` envia uma mensagem de espera.

## 4. Endpoints da API <a name="endpoints-da-api"></a>

O bot expõe um endpoint HTTP em `/bot`, que retorna uma resposta JSON quando acessado. Este endpoint é destinado à verificação do status do servidor e sempre responde com uma mensagem de status.

- `GET /bot`: Retorna uma resposta JSON indicando que o servidor está online.

## 5. Registro de Logs <a name="registro-de-logs"></a>

O bot utiliza a biblioteca de registro Winston para registrar mensagens em diferentes níveis (por exemplo, debug, info, error). Os logs são impressos no console.

- Os logs incluem carimbos de data e hora e níveis de log para facilitar a depuração.

## 6. Tarefas Agendadas <a name="tarefas-agendadas"></a>

O bot utiliza a biblioteca `node-cron` para agendar tarefas em intervalos específicos. Atualmente, ele agenda as seguintes tarefas:

- Uma tarefa cron que faz uma solicitação HTTP GET a uma API externa (`https://api-fortune-tig.onrender.com/bot`) a cada 5 minutos. Ela registra o sucesso ou a falha da solicitação.

- A função `enviarMensagemAutomatica` é agendada para ser executada a cada 20 minutos e envia mensagens para o grupo do Telegram.

- A função `finalizarEnvioDeMensagens` é agendada para ser executada após um atraso de 16 minutos após o envio das mensagens.

- A função `mensagemAguarde` é agendada para ser executada após um atraso de 16 minutos após o envio das mensagens de conclusão.


## Como executar
### Passo 1: Clone o Repositório

1. Abra o terminal ou prompt de comando em sua máquina.

2. Navegue até a pasta onde deseja clonar o repositório usando o comando `cd` (por exemplo, `cd /caminho/para/sua/pasta`).

3. Clone o repositório executando o seguinte comando:

   ```bash
   git clone https://github.com/seu-nome-de-usuario/nome-do-repositorio.git
   ```


### Passo 2: Configure as Variáveis de Ambiente

Antes de executar o projeto, você precisará configurar as variáveis de ambiente necessárias. O seu projeto usa o pacote `dotenv` para carregar variáveis de ambiente a partir de um arquivo `.env`.

1. Vá até a pasta do projeto que você acabou de clonar:

   ```bash
   cd nome-do-repositorio
   ```

2. Crie um arquivo chamado `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. No seu caso, certifique-se de configurar a variável `TOKEN` com o token do seu bot do Telegram:

   ```env
   TOKEN=sua-chave-de-token-do-telegram
   ```

   Substitua `sua-chave-de-token-do-telegram` pelo token real do seu bot.

### Passo 3: Instale as Dependências

Agora, você precisa instalar as dependências do projeto usando o Node.js e o npm (ou yarn). No diretório do projeto, execute o seguinte comando:

```bash
npm install
```

Isso instalará todas as dependências listadas no arquivo `package.json`.

### Passo 4: Execute o Projeto

Depois de configurar as variáveis de ambiente e instalar as dependências, você pode executar o projeto. Use o seguinte comando:

```bash
node ./server.js
```

Se tudo estiver configurado corretamente e as dependências estiverem instaladas, seu bot do Telegram deve começar a funcionar e você verá mensagens de registro no console.

Lembre-se de que você também pode precisar ajustar algumas configurações específicas do seu projeto, dependendo de sua lógica de negócios e requisitos adicionais. Certifique-se de ler o código e entender como ele funciona para personalizá-lo conforme necessário.

---

### Bot Em Produção

<img src="https://media.licdn.com/dms/image/D4D2DAQGeDHtGs44nuw/profile-treasury-image-shrink_1920_1920/0/1693926025520?e=1695247200&v=beta&t=3AYlBaPa5tWpkY4w3e52N0w9lf47vlV6PUNwysoOvHw" width="630" height="400" alt="Bot Em Produção">


Esta documentação fornece uma visão geral dos principais componentes e funcionalidades do projeto do bot do Telegram. Para executar e manter o bot, certifique-se de que as dependências necessárias estejam instaladas e configuradas corretamente. Além disso, verifique se as variáveis de ambiente, incluindo o token do bot do Telegram, estão definidas adequadamente.
