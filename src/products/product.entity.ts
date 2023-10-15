import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './categories/category.entity';

@Entity({
  name: 'products'
})
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  public barcode: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  public name: string;

  @ManyToOne(() => Category)
  @JoinColumn({
    name: 'category_id'
  })
  public category: Category;

  @Column()
  public min_stock: number;

  @Column({
    type: 'decimal',
    precision: 16,
    scale: 2,
  })
  public selling_price: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  public img_url: string;

  @Column({
    type: 'tinyint',
  })
  public is_active: boolean;
}
