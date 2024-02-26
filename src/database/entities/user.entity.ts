import {Entity, Column} from "typeorm"
import {BaseEntity} from "./models/base.enity";

@Entity('users')
export class Post extends BaseEntity{


    @Column('text',{nullable:true})
    name: string

    @Column('text')
    email: string

    @Column('text',{select: false})
    password: string

    @Column('int',{nullable:false})
    age: number


}