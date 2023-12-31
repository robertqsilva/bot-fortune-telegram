const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');
const axios = require('axios');

const { createLogger, transports, format } = require('winston');
require('dotenv').config();

const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

const grupo = "-1001776399915";

const app = express();

app.use(bodyParser.json());


const logger = createLogger({
  level: 'debug', 
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
  ],
});

app.get('/bot', async (req, res) => {
    return res.status(200).json({ mensagem: "servidor on papai" });
});


// Agendamento para fazer uma solicitação a cada 5 minutos
cron.schedule('*/5 * * * *', () => {
  axios.get('https://api-fortune-tig.onrender.com/bot')
    .then((response) => {
      console.log('Solicitação de manutenção enviada com sucesso');
    })
    .catch((error) => {
      console.error('Erro ao enviar a solicitação de manutenção:', error.message);
    });
});


app.listen(443, () => {
  console.log('Servidor rodando na porta 3000');
});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  return bot.sendMessage(chatId, 'sevidor rodando papai');
});

const enviarMensagemAutomatica = async () => {
  const mensagem = await `✅ Oportunidade Encontrada ✅\n\n` +
    `🐯 Fortune Tiger\n` +
    `🎰 N° Máximo Jogadas: 10\n` +
    `⏳ Validade: 3 minutos`;

  const tecladoInline = await {
    inline_keyboard: [
      [
        {
          text: '🎁CADASTRE-SE🎁',
          url: 'https://go.aff.estrelabetpartners.com/63dm0gju'
        }
      ]
    ]
  };

  const opcoesMensagem = await {
    reply_markup: JSON.stringify(tecladoInline)
  };

  setTimeout(finalizarEnvioDeMensagens, 180000);

  logger.info('Enviando mensagem automática ao grupo:', mensagem);

  return bot.sendMessage(grupo, mensagem, opcoesMensagem);
};

const finalizarEnvioDeMensagens = async () => {
  const mensagemFinalizada = await `✅ Sinal Finalizado ✅\n` +
    `Bateu a meta? Volte amanhã!`;

  setTimeout(mensagemAguarde, 960000);

  // Registre a solicitação
  logger.info('Enviando mensagem de finalização ao grupo:', mensagemFinalizada);

  return bot.sendMessage(grupo, mensagemFinalizada);
};

const mensagemAguarde = async () => {
  const aguardeMsm = await `🔎 Aguarde, esperando por oportunidade...`;

  // Registre a solicitação
  logger.info('Enviando mensagem de aguarde ao grupo:', aguardeMsm);

  return bot.sendMessage(grupo, aguardeMsm);
};

setInterval(enviarMensagemAutomatica, 1200000);
