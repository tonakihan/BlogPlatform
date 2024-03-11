import { Model, Table, Column, DataType, BelongsTo, ForeignKey, PrimaryKey } from "sequelize-typescript";
import User from "./user.model";

@Table({
  tableName: "subscribe",
  timestamps: false
})
class Subscribe extends Model {
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
    field: "user_target_id"
  })
  userTargetId!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: "user_object_id"
  })
  userObjectId!: number;

  @BelongsTo(() => User, "userTargetId")
  userTarget: User;

  @BelongsTo(() => User, "userObjectId")
  userObject: User;
}

export default Subscribe
