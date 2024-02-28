import { Model, Sequelize, DataTypes } from 'sequelize';

class Post extends Model {
  public id?: number;
  public author_user_id!: number; // По ходу действия мб изменить
  public status!: string;
  public file_path?: string;
  public likes?: string;
  public text!: string;
}

function PostMap(sequelize: Sequelize) {
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    author_user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id"
      },
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(10)
    },
    file_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    text: {
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    tableName: 'posts',
    timestamps: false
  });
  Post.sync();
}

export default Post;
export { PostMap };
