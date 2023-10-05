import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

const MONGODB_URL = process.env.DB_URI;

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URL), StudentModule],
})
export class AppModule {}
