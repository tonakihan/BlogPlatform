import { Model, Sequelize, DataTypes } from 'sequelize';

class User extends Model {
  public id?: number;
  public first_name!: string;
  public last_name!: string;
  public nickname!: string;
  public email!: string;
  public role!: string;
}

function UserMap(sequelize: Sequelize) {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45)
    },
    last_name: {
      type: DataTypes.STRING(100)
    },
    nickname: {
      type: DataTypes.STRING(45)
    },
    email: {
      type: DataTypes.STRING(200)
    },
    role: {
      type: DataTypes.STRING(100)
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false // TODO: Что это
  });
  User.sync();
}

export default User;
export { UserMap };