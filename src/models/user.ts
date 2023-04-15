import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Register } from "./register";

@Table({
  timestamps: false,
  tableName: "users",
})
export class User extends Model {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  code!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
