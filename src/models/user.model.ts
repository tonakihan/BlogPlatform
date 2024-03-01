import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({ // TODO: Погуглить, что это
  tableName: 'users',
  timestamps: false
})
class User extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
}

export default User;