import { Model, Table, Column, DataType } from "sequelize-typescript";

@Table({
  tableName: "subscribe",
  timestamps: false
})
class Subscribe extends Model {
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
    field: "user_target_id"
  })
  userTargetId!: number;

  @Column({
    type: DataType.INTEGER,
    references: {
       model: "users",
      key: "id"
    },
    field: "user_object_id"
  })
  userObjectId!: number
}

export default Subscribe
