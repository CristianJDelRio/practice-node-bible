const { Schema, model } = require("mongoose");

const IdeaSchema = new Schema(
  {
    idea: { type: String, required: true, uppercase: true },
    description: { type: String, uppercase: true },
    upVotes: [{ type: Boolean }],
    downVotes: [{ type: Boolean }],
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      autopopulate: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comment",
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
);

IdeaSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("idea", IdeaSchema);
