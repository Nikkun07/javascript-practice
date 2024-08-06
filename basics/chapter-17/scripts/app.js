//DOM Queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');

//Class Instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'Sakuya');


//Add New Chat
newChatForm.addEventListener('submit', e =>
    {
        e.preventDefault();
        const msg = newChatForm.message.value.trim();
        chatroom.addChat(msg)
            .then(() => newChatForm.reset())
            .catch(err => console.log(err));
    });

    
//Get chats and render 
chatroom.getChatMessages(data =>chatUI.render(data));
