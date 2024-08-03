/* STRUCTURE */

//Setup a real-time listener to capture new chats

//update username

//update chat room


//Create Chatroom Class
class Chatroom
{
    constructor(room, username)
    {
        this.room = room;
        this.username = username;
        this.chats = dataBase.collection('chats-collection');
    }

    async addChat(message)
    {
        //Format Chat Object
        const now = new Date();
        const chat = 
        {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //Save Chat Document
        const response = await this.chats.add(chat);
        return response;
    }

    getChatMessages(callback)
    {
        this.chats
            .onSnapshot(snapshot =>
            {
                snapshot.docChanges().forEach(change =>
                {
                    if(change.type === 'added')
                    {
                        //Update the UI
                        callback(change.doc.data());
                    }
                });
            });
    }
}

const chatroom = new Chatroom('general', 'Sakuya');
/* chatroom.addChat(':Osanacry:')
    .then(() => console.log("Chat Added"))
    .catch(err => console.log(err)); */

chatroom.getChatMessages((data) =>
{
    console.log(data)
});

//console.log(chatroom);