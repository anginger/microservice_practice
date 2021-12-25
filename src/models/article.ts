import { Table, Column, Model } from 'sequelize-typescript';

@Table
export default class Article extends Model {
    @Column
    title: string

    @Column
    content: string
}
