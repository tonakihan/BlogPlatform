import { Model, Table, Column, DataType } from "sequelize-typescript"; 

@Table({
  tableName: "post_comments"
})
class Comments extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.INTEGER,
    references: {
      model: "users",
      key: "id"
    },
    allowNull: true,
    field: "author_user_id"
  })
  authorUserId!: number;

  @Column({
    type: DataType.TEXT,
    field: "text"
  })
  text!: string;

  @Column({
    type: DataType.INTEGER,
    references: {
      model: "posts",
      key: "id"
    },
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
