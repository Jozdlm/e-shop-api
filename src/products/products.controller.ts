import { Controller, Get, Param, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Controller('products')
export class ProductsController {
  public constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  @Get()
  public findAll(@Query('category') categorySlug: string): Promise<Product[]> {
    if (categorySlug) {
      return this.productsRepository.find({
        where: {
          category: {
            slug: categorySlug,
          },
        },
      });
    }

    return this.productsRepository.find({
      relations: {
        category: true,
      },
    });
  }

  @Get(':id')
  public findById(@Param('id') productId: number): Promise<Product> {
    return this.productsRepository.findOne({
      where: {
        id: productId,
      },
      relations: {
        category: true,
      },
    });
  }
}
