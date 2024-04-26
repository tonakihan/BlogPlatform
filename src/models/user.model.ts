import { Model, Table, Column, DataType, HasMany, PrimaryKey } from "sequelize-typescript";
import Post from "./post.model";

@Table({
  tableName: 'users',
  timestamps: false
})
class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    field: "id"
  })
  id?: number;

  @Column({
    type: DataType.STRING(45),
    field: "first_name"
  }) 
  firstName!: string;
  
  @Column({
    type: DataType.STRING(100),
    field: "last_name"
  })
  lastName!: string;

  @Column({
    type: DataType.STRING(45),
    field: "nickname"
  })
  nickname!: string;

  @Column({
    type: DataType.STRING(200),
    field: "email"
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: "role"
  })
  role!: string;

  @Column({
    type: DataType.STRING(200),
    field: "password"
  })
  password!: string;

  @HasMany(() => Post) 
  posts: Post[];
}

export default User;