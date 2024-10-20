let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let item = "";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
btn1.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию по водке");
item = "1";
tg.MainButton.show();
}
});
btn2.addEventListener("click", function () {
if (tg.MainButton.isVisible) {
tg.MainButton.hide();
}
else {
tg.MainButton.setText("Вывести информацию по виски");
item = "2";
tg.MainButton.show();
}
});
Telegram.WebApp.onEvent("mainButtonClicked", function () {
tg.sendData(item);
});
web_app=WebAppInfo(url="https://zxcomegalul.github.io/LabInterface")
keyboard = ReplyKeyboardMarkup(
 keyboard=[
 [KeyboardButton(text="Виды напитков", 
web_app=web_app)]
 ],
 resize_keyboard=True
)
@dp.message_handler(content_types='web_app_data')
async def buy_process(web_app_message):
 await bot.send_message(web_app_message.chat.id,
DISC[f'{web_app_message.web_app_data}'])
