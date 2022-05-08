const { Schema, model } = require("mongoose");

const ReactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //Use a getter method to format the timestamp on query
    get: (createdAtVal) => dateFormat(createdAtVal)
  },
});

const ThoughtSchema = new Schema(
  {
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
      get: (createdAtVal) => dateFormat(createdAtVal)
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
      getters: true,
    },
    id: false,
  }
);
//create a virtual call reaction count that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thought", ThoughtSchema);

module.exports = Thoughts;
