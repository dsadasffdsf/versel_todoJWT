const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  title:{type:String ,required:true},
  desc:{type:String ,required:true},
  status:{type:Boolean, default:false},
  author:{type:String, required:true},
});

module.exports = model('Post', PostSchema);