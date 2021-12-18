# Puppy Sender Telegram

A telegram bot that sends puppy images to a telegram user and channel

## Deploy

1. Get bot token

Edit .ENV file and replace BOT_TOKEN=INSERT_TOKEN with the new token

2. Create a group with the admins

3. Add bot to a group (this group will be used to receive the student requests)

    - Make the request in the browser https://api.telegram.org/bot<INSERT_TOKEN>/getUpdates and replace the INSERT_TOKEN with the bot token

The received json will be, get the chat id:

```json

{
    "ok": true,
    "result": [
        {
            "message": {
                "message_id": 144,
                "chat": {
                    "id": -121432131321,                   // <-------  COPY THIS ID
                    "title": "GROUP NAME",
                    "type": "group",
                    "all_members_are_administrators": true
                }
            }
        }
    ]
}

```

4. Replace on .ENV file CHAT_ID=INSERT_ID_HERE