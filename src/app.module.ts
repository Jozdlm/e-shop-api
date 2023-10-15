import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Category } from './products/categories/category.entity';
import { ProductsModule } from './products/products.module';

const SOURCE_OPTIONS: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'devroot',
  database: 'dbsistema_cv',
  entities: [Category],
  synchronize: true,
};

@Module({
  imports: [TypeOrmModule.forRoot(SOURCE_OPTIONS), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
