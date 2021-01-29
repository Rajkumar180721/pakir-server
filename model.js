import mongoose, { mongo, Schema } from 'mongoose';



const user = new Schema({
    userID: {type: String, index: true, unique: true, required: true, minlength: 5, maxlength: 20},
    email: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    friends: [{
        name: String,
        chat_key: {type: mongoose.Types.ObjectId, ref: "chats", unique: true, required: true}
    }],
    active_devices: [],
});

const chats = new Schema({
    chats: []
});