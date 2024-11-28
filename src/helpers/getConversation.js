const { ConversationModel } = require("../models/Conversation");

const getConversation = async (currentUserId) => {
    if (currentUserId) {
        const currentUserConversation = await ConversationModel.find({
            "$or": [
                { sender: currentUserId },
                { receiver: currentUserId }
            ]
        }).sort({ updatedAt: -1 }).populate('messages').populate('sender').populate('receiver');

        const conversation = currentUserConversation.map((conversation) => {
            const countUnseenMsg = conversation.messages.reduce((prev, cur) => prev + (cur.seen ? 0 : 1), 0);
            return {
                _id: conversation?._id,
                sender: conversation?.sender,
                receiver: conversation?.receiver,
                unseenMsg: countUnseenMsg,
                lastMsg: conversation.messages[conversation?.messages?.length - 1]
            }
        })
        return conversation;
    }else{
        return [];
    }
}

module.exports = getConversation;