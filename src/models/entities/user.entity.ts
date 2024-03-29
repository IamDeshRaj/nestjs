import { Exclude } from "class-transformer";
import { IsBoolean, IsEmail } from "class-validator";
import { AfterInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Report } from "./report.entity";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsEmail()
    @Unique(['email'])
    email: string;

    @Column()
    @Exclude()
    password: string;

    @Column({ default: true })
    @IsBoolean()
    admin: boolean;

    @OneToMany(() => Report, (report) => report.user) // First function helps to remove circular dependency
    reports: Report[];

    @AfterInsert()
    logId() {
        console.log(`User saved with ${this.id}`);
    }
}
