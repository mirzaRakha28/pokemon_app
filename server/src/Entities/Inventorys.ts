import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Inventorys extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  id_user!: number;

  @Column()
  nickname!: string;
  
  @Column()
  pokemon!: string;

  
}
