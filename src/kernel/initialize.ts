import database from './database';
import Article from '../models/article';

module.exports = async function (): Promise<void> {
    database.addModels([Article]);
    await database.sync()
}
