import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  private _products: string[] = ['Aceite mineral', 'Jabón para trastes'];

  @Get()
  public findAll(): string[] {
    return this._products;
  }

  @Post()
  public create(@Body('name') product: string): object {
    this._products.push(product);

    return { message: 'Product Created' };
  }
}
