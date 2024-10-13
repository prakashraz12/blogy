import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "Blog" })
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    blogTitle: string;

    @Column({ nullable: false })
    slug: string;

    @Column({ nullable: false, default: true })
    isPublished: false;

    @Column({ nullable: false })
    content: string;

    @Column()
    thumbnail: string;

    @Column()
    tags: string[]

    @Column()
    meta_description: string;

    @ManyToMany(() => Category, (category) => category.blog)
    category: Category;

}
