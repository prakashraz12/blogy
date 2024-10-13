import { Blog } from "src/blog/entities/blog.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Category" })
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    title: string;

    @Column({ default: true })
    isActive: boolean;

    @ManyToMany(() => Blog, (blog) => blog.category)
    blog:Blog;
}
