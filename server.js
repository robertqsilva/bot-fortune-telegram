const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const token = "6388038404:AAHk_8RSQk0y_TMbDUCAXfLNrFbhV6_SHUA"; 
const bot = new TelegramBot(token, { polling: true });

const grupo = "-1001776399915"; 

const app = express();

app.use(bodyParser.json());

app.post('/bot', async (req, res) => {
  const mensagem = await req.body.server;

  if (mensagem === '?') {
    return res.status(200).json({mensagem: "servidor on papai"})
  }
});


app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});


bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'sevidor rodando papai');
});


const enviarMensagemAutomatica = async () => {
  const mensagem = await`✅ Oportunidade Encontrada ✅\n\n` +
    `🐯 Fortune Tiger\n` +
    `🎰 N° Máximo Jogadas: 6\n` +
    `⏳ Validade: 3 minutos`;

  const tecladoInline = await{
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

  bot.sendMessage(grupo, mensagem, opcoesMensagem);

  setTimeout(finalizarEnvioDeMensagens, 180000);
};

const finalizarEnvioDeMensagens = async () => {
  const mensagemFinalizada = await `✅ Sinal Finalizado ✅\n` +
    `Bateu a meta? Volte amanhã!`;

  bot.sendMessage(grupo, mensagemFinalizada);

  setTimeout(mensagemAguarde,60000)
};

const mensagemAguarde = async () => {
  const aguardeMsm = await `🔎 Aguarde, esperando por oportunidade...`
  bot.sendMessage(grupo, aguardeMsm);
}


setInterval(enviarMensagemAutomatica, 600000);
