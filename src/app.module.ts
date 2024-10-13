import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BlogModule } from './blog/blog.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(ConfigService:ConfigService)=>({
        type:"postgres",
        host:ConfigService.get("DB_HOST"),
        port:ConfigService.get("DB_PORT"),
        username:ConfigService.get("USER_NAME"),
        password:ConfigService.get("PASSWORD"),
        database:ConfigService.get("DB_NAME"),
        entities:[join(process.cwd(),"dist/**/*.entity.js")]
      })
    }),
    UserModule,
    AdminModule,
    BlogModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
