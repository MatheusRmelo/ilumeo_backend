import { Table, Model, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from './user';

@Table({
    timestamps: false,
    tableName: 'registers'
})
export class Register extends Model {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    })
    id!:number;
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
    status!:string;
    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    register_at!:string;
}

