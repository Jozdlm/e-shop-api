import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { ProductsController } from './products.controller';
import { CategoriesController } from './categories/categories.controller';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Product])],
  controllers: [ProductsController, CategoriesController],
  providers: [],
})
export class ProductsModule {}
