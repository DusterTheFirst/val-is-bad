/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    public username: string;
    @Column()
    public email: string;
    // @PrimaryGeneratedColumn("uuid")
    // public id: number;

    constructor(name: string, email: string) {
        this.username = name;
        this.email = email;
    }
}