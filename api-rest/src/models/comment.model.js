const { Schema, model } = require("mongoose");

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true, uppercase: true },
    description: { type: String, uppercase: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
      autopopulate: true
    }
  },
  { timestamps: true }
);

CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = model("comment", CommentSchema);
