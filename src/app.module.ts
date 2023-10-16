import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Category } from './products/categories/category.entity';
import { ProductsModule } from './products/products.module';
import { RouterModule, Routes } from '@nestjs/core';
import { Product } from './products/product.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

const DB_ASYNC_OPTIONS: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DATABASE_HOST'),
    port: +configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    entities: [Category, Product],
    synchronize: false,
  }),
};

const ROUTES: Routes = [
  {
    path: 'api',
    module: ProductsModule,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(DB_ASYNC_OPTIONS),
    RouterModule.register(ROUTES),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
