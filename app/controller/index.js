const db = require("../models/index");
const Article = db.article;
const Comment = db.comment;

exports.createArticle = async (request, response) => {
  try {
    const { title, description } = request.body;
    await Article.create({
      title,
      description,
    });
    response.status(200).json({ message: "create article success" });
  } catch (err) {
    response.status(500).json({ message: err });
  }
};

exports.createComment = async (request, response) => {
  try {
    const { name, text, articleId } = request.body;

    const existingArticle = await Article.findByPk(articleId);

    if (!existingArticle) {
      return response.status(400).json({ message: "Invalid article ID" });
    }

    await Comment.create({
      name,
      text,
      articleId,
    });
    response.status(200).json({ message: "create comment success" });
  } catch {
    response.status(500).json({ message: err });
  }
};

exports.getCommentByArticleId = async (request, response) => {
  try {
    const data = await Article.findByPk(request.params.id, {
      include: {
        model: Comment,
        as: "comments",
      },
    });
    if (!data) {
      return response.status(400).json({ message: "data not found" });
    }
    response.status(200).json({ message: data.comments });
  } catch (err) {
    response.status(500).json({ message: err });
  }
};

exports.getCommentById= async (request, response)=>{
    try{
        const data= await Comment.findByPk(request.params.id);
        if (!data) {
            return response.status(400).json({ message: "data not found" });
          }
        response.status(200).json({message:data})
    }catch(err){
        response.status(500).json({ message: err });
    }
}

exports.findAll = async (request, response) => {
  try {
    const data = await Article.findAll({
      include: {
        model: Comment,
        as: "comments",
      },
    });
    response.status(200).json({ message: data });
  } catch (err) {
    response.status(500).json({ message: err });
  }
};
