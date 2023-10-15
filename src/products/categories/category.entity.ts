import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'product_categories'
})
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 50
  })
  public name: string;

  @Column({
    type: 'varchar',
    length: 255
  })
  public description: string;
}
