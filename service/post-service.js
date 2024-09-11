const PostModel = require('../models/post-model');
const ApiError = require('../exceptions/api-error');

class PostService {
  async addPost(title, desc, author) {
    try {
      const post = await PostModel.create({
        title,
        desc,
        author,
      });
      return { postData: post };
    } catch (e) {
      console.log(e);
    }
  }
  async getPosts() {
    try {
      const posts = await PostModel.find();
      return posts;
    } catch (e) {
      ApiError(e);
    }
  }
  async updatePost(_id, title, desc, status, author) {
    try {
      const post = await PostModel.findByIdAndUpdate(_id, { title, desc, status:`${!status}`, author });
      return post
    } catch (e) {
      console.log(e);
    }
  }
  async removePost(_id) {
    try {
      const post = await PostModel.findByIdAndDelete(_id);
      return post;
    } catch (e) {
      console.log(e);
    }
  }
}
module.exports = new PostService();
