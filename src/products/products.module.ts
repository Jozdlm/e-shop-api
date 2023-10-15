import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { ProductsController } from './products.controller';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [ProductsController, CategoriesController],
  providers: [],
})
export class ProductsModule {}
