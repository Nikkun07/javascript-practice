//DOM Queries
const chatList = document.querySelector('.chat-list');

//Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'Sakuya');


//Get chats and render 
chatroom.getChatMessages((data) =>
{
    console.log(data);
    chatUI.render(data);
});