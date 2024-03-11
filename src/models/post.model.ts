// TODO: Добавить поле createdAt

import { Model, Table, Column, DataType, ForeignKey, BelongsTo, PrimaryKey, HasMany } from "sequelize-typescript";
import User from "./user.model";
import Comment from "./comment.model";

@Table({
  tableName: "posts",
  timestamps: false
})
class Post extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    field: "id"
  })
  id?: number;
  
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: "author_user_id"
  })
  authorId!: number;

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

  @HasMany(() => Comment)
  comments: Comment[];
}

export default Post;