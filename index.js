const express= require('express');
const app= express();
const PORT=3000;
const route = require("express").Router();
const {sequelize, connecDb}= require("./app/config/db")

const apiRoute=require("./app/routes/index")

app.use(express.json());

route.get("/", async(request, response)=>{
    response.status(200).json({message: "Get Success"})
})


apiRoute(app);

app.use(route);

sequelize.sync().then(()=>{

    app.listen(PORT, async()=>{
        console.log(`Server is running at http:localhost:${PORT}`);
        connecDb()
    })
})