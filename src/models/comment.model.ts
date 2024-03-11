import { Model, Table, Column, DataType, PrimaryKey, ForeignKey } from "sequelize-typescript"; 
import User from "./user.model";
import Post from "./post.model";

@Table({
  tableName: "post_comments",
  timestamps: false
})
class Comments extends Model {
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
  authorUserId!: number;

  @Column({
    type: DataType.TEXT,
    field: "text"
  })
  text!: string;

  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    field: "post_id"
  })
  postId!: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
    field: "likes"
  })
  likes?: string;
}

export default Comments;
