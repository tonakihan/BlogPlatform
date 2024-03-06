// TODO: Добавить поле createdAt

import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";

@Table({
  tableName: "posts",
  timestamps: false
})
class Post extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id"
  })
  id?: number;
  
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    /*references: {
      model: "users",
      key: "id"
    },*/
    allowNull: true,
    field: "author_user_id"
  })
  authorUserId!: number;

  @Column({
    type: DataType.STRING(10),
    field: "status"
  })
  status!: string; 

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    field: "file_path"
  })
  filePath?: string;
  
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    field: "likes"
  })
  likes?: number;

  @Column({
    type: DataType.TEXT,
    field: "text"
  })
  text!: string;

  @BelongsTo(() => User)
  author: User;
}

export default Post;