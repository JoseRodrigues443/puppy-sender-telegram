import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + '/.env' });

import { Context, Markup, Telegraf } from 'telegraf';
import { Update } from 'typegram';
import getRedditImage from "./libs/reddit";
const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

const PUPPIES: string = "puppies"

bot.start((ctx) => {
  ctx.reply(`Hello ${ctx.from.first_name}!`);
});

bot.help((ctx) => {
  ctx.reply(`Write ${PUPPIES} to see cools puppies`);
  ctx.reply('Write /reddit "subRedditName" to receive a image from a subreddit');
  ctx.reply('Write /quit to stop the bot');
});

bot.hears(PUPPIES, async (ctx) => {
  const image = await getRedditImage(PUPPIES)
  ctx.replyWithPhoto({ url: image }, { caption: "Cute puppy!!" });
});

bot.command('reddit', async (ctx) => {
  const params = ctx.update.message.text.split(' ')
  if (params && params.length == 2) {
    ctx.reply(`${ctx.message.from.username} here you go:`)
    const image = await getRedditImage(params[1])
    ctx.replyWithPhoto({ url: image });
  } else {
    ctx.reply(`${ctx.message.from.username} you did not said the subreddit`)
  }
});

bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);
  // Context shortcut
  ctx.leaveChat();
});

bot.launch();

