import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"User"})
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column({unique:true})
    email:string;

    @Column()
    bio:string;

    @Column()
    avatar:string;

    @Column()
    isAcctive:boolean;

    @Column()
    isBlocked:boolean;

    @Column({nullable:false, default:"User"})
    user_type:string;

    

}
