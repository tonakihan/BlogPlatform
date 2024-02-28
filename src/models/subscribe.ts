import { Model, Sequelize, DataTypes } from 'sequelize';

class Subscribe extends Model {
  public id?: number;
  public user_target_id!: number;
  public user_object_id!: number;
}

function SubscribeMap(sequelize: Sequelize) {
  Subscribe.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_target_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
    },
    user_object_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
    }
  }, {
    sequelize,
    tableName: 'subscribe',
    timestamps: false
  });
  Subscribe.sync();
}

export default Subscribe;
export { SubscribeMap };