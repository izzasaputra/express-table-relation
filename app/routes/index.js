module.exports = (app) => {
    const action = require("../controller/index");
    const image = require("../controller/image.controller")
    const uploadImage= require("../utils/uploadImages")
    const r = require("express").Router();
  
    r.post("/addArticle", action.createArticle);
    r.post("/addComment", action.createComment);
    r.get("/getCommentByArticleId/:id", action.getCommentByArticleId);
    r.get("/getAllData", action.findAll)
    r.get("/getCommentById/:id", action.getCommentById)
    r.post("/uploadImage", uploadImage, image.uploadImage )
    r.get("/getImage",image.getImage)
    r.get('/image/:filename', image.images);

    app.use("/api", r);
  };