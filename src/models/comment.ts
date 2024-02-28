import { Model, Sequelize, DataTypes } from 'sequelize';

class Comments extends Model {
  public id?: number;
  public author_user_id!: number;
  public text!: string;
  public post_id!: number;
  public likes?: string;
}

function CommentsMap(sequelize: Sequelize) {
  Comments.init({
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
    text: {
      type: DataTypes.TEXT
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "posts",
        key: "id"
      },
      allowNull: true
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'post_comments',
    timestamps: false
  });
  Comments.sync();
}

export default Comments;
export { CommentsMap };