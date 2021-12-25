import statusCode from 'http-status-codes';
import express, {urlencoded, Router} from 'express';

import Article from '../models/article';

const router: Router = express.Router();
router.use(urlencoded({ extended: true }));
router.get('/list', function (_: express.Request, response: express.Response) {
    Article.findAll().then((articles: Article[]) => {
        response.status(statusCode.OK).send({
            status: statusCode.OK,
            data: articles
        });
    });
})
router.post('/', function (request: express.Request, response: express.Response) {
    if (!(request.body.title && request.body.content)) {
        response.status(statusCode.BAD_REQUEST).send({
            status: statusCode.BAD_REQUEST
        });
    } else {
        Article.create({
            title: request.body.title,
            content: request.body.content,
        }).then((data) => console.log(data.toJSON()));
        response.status(statusCode.CREATED).send({
            status: statusCode.CREATED
        });
    }
});

export default router;
