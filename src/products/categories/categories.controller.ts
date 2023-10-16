import { Controller, Get, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoriesController {
  public constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  @Get()
  public findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  @Get(':id')
  public findById(@Param('id') categoryId: number): Promise<Category> {
    return this.categoriesRepository.findOne({
      where: {
        id: categoryId,
      },
    });
  }
}
