const {Sequelize, Model, DataTypes} = require('sequelize');
const memoryHandler = new Sequelize('sqlite::memory:');

class Article extends Model {
}

Article.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING
    },
    {
        sequelize: memoryHandler,
        modelName: 'article'
    }
);

module.exports = Article
