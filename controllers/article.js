const statusCode = require('http-status-codes');
const express = require('express');
const router = express.Router();

const {Sequelize} = require("sequelize");
const memoryHandler = new Sequelize('sqlite::memory:');

const Article = require('../models/article')

router.use(express.urlencoded());

router.get('/list', function (_, response) {
    Article.findAll().then(articles => {
        response.status(statusCode.OK).send({
            status: statusCode.OK,
            data: articles
        });
    });
})

router.post('/', function (request, response) {
    if (!(request.body.title && request.body.content)) {
        response.status(statusCode.BAD_REQUEST).send({
            status: statusCode.BAD_REQUEST
        });
    } else {
        memoryHandler.sync().then(() => {
            Article.create({
                title: request.body.title,
                content: request.body.content,
            }).then((data) => console.log(data.toJSON()));
        })
        response.status(statusCode.CREATED).send({
            status: statusCode.CREATED
        });
    }
});

module.exports = router;
