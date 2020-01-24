using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Telegram.Bot;

namespace FitnationAPINotification.Services
{
    public class TelegramNotification : BotCommand
    {
        public override string Name => "/ch";
        public TelegramBotClient CreateInstance()
        {
            var botClient = new TelegramBotClient("961809792:AAGotfJdDRNBLEyKl5d9-6EAjrPwdfh72ek");
            return botClient;
        }

        public override void Execute(string message)
        {
            var chatId = 708511549;
            var botClient = CreateInstance();
            botClient.SendTextMessageAsync(chatId, message);
        }
    }
}
