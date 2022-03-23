var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema(
  {
    title: String,
    description: { type: String, required: true },
    tags: [String],
    author: String,
    likes: { type: Number, default: 0 },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Article', articleSchema);
