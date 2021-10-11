const express = require('express');
const app = express();
const port = 3000

app.get('/', function(req, res) {
    res.json({
        name: "essential",
        description: "Star Inc. Web 研發技能訓練教學 ",
        website: "https://github.com/star-inc/essential",
        copyright: "(c)2021 Star Inc."
    });
});

app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`)
})
