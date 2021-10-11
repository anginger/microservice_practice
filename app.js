const statusCode = require('http-status-codes');
const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res) {
    res.status(statusCode.OK).send({
        status: statusCode.OK,
        data: {
            description: "Star Inc. Web 研發技能訓練教學 ",
            information: "https://github.com/star-inc/essential",
            copyright: "(c)2021 Star Inc."
        }
    });
});

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`)
})
