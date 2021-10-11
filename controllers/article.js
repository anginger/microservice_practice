const statusCode = require('http-status-codes');
const express = require('express');
const router = express.Router();

const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:');

const Article = require('../models/article')

router.use(express.urlencoded());

router.post('/', function (request, response) {
    if (!(request.body.title && request.body.content)) {
        response.status(statusCode.BAD_REQUEST).send({
            status: statusCode.BAD_REQUEST
        });
    }
    sequelize.sync().then(() => {
        Article.create({
            title: request.body.title,
            content: request.body.content,
        }).then((data) => console.log(data.toJSON()));
    })
});

module.exports = router;
