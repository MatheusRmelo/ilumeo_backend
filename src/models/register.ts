import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from "sequelize-typescript";
import { User } from "./user";
import IRegisterAttributes from "../interfaces/IRegisterAttributes";
import { Optional } from "sequelize";

interface IDBRegisterCreationAttributes
  extends Optional<IRegisterAttributes, "id"> {}

@Table({
  timestamps: false,
  tableName: "registers",
})
export class Register
  extends Model<IDBRegisterCreationAttributes>
  implements IDBRegisterCreationAttributes
{
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  })
  id!: number;
  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  usercode!: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  register_at!: Date;
}
