# Bot install

1. Install node js version 12

https://nodejs.org/en/

2. On admin terminal

`npm install`
`npm -g install forever`

3. Download this repo, and then on the root

`forever start index.js`

(To STOP `forever stop index.js`)


---

> Note: To send information without user interaction alter the telegraf usage using:

```typescript

const telegram: Telegram = new Telegram(process.env.BOT_TOKEN as string);
const chatId = '...';
telegram.sendMessage(
    chatId,
    'This message was sent without your interaction!'
  );

```