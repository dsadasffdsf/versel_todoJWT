const ApiError = require('../exceptions/api-error');
const postService = require('../service/post-service');

class PostController {
  async addPost(req, res, next) {
    try {
      console.log(req.body);
      const { title, desc, author } = req.body;
      const postData = await postService.addPost(title, desc, author);
      res.json(postData);
    } catch (e) {
      next(e);
    }
  }
  async getPost(req, res, next) {
    try {
      const posts = await postService.getPosts();
      return res.json(posts);
    } catch (e) {
      next(e);
    }
  }
  async updatePost(req, res, next) {
    try {
      console.log(req.body);
      const { _id, title, desc, status, author } = req.body;
      const post = await postService.updatePost(_id, title, desc, status, author);
      console.log(post);
      return res.json(post);
    } catch (e) {
      next(e);
    }
  }
  async removePost(req, res, next) {
    try {
      const { _id } = req.body;
      const post = await postService.removePost(_id);
      if (!post) {
        return res.json('Такого поста нет');
      }
      return res.json({message:'Пост успешно удален'});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PostController();
