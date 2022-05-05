const { Schema, model } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 2,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //use a getter to format timestamp
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionsSchema],
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
    }

);
//create a virtual call reaction count that retrieves the length of the thought's reactions array field on query