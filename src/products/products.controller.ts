import { Controller, Get, Param } from '@nestjs/common';
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
  public findAll(): Promise<Product[]> {
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
