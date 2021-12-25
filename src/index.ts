import express, {Router} from "express";
import statusCode from "http-status-codes";

import article from "./controllers/article";

const router: Router = express.Router();

router.get('/', function (_: express.Request, response: express.Response) {
    response.status(statusCode.OK).send({
        status: statusCode.OK,
        data: {
            description: "Star Inc. Web 研發技能訓練教學",
            information: "https://github.com/star-inc/essential",
            copyright: "(c)2021 Star Inc."
        }
    });
});

router.use('/article', article);

module.exports = router;
