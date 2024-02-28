import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "posts"
})
class Post extends Model {
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
}

export default Post;