const chatModel = require('../model/chatModel')

module.exports = {
    GetChatDetails: (friendId, myId) => {
        return new Promise(async (resolve, reject) => {
            try {
                let chat = await chatModel.findOne({ users: { $all: [friendId, myId] } });
                chatdetail = chat ? chat : await chatModel.create({ users: [friendId, myId] });
                resolve(chatdetail)
            } catch (err) {
                reject(err)
            }
        });

    }
}