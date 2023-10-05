import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://keerthikmca05:tlUvJusNNpeNumLK@cluster0.ighxidg.mongodb.net/pma?retryWrites=true&w=majority',
    ),
    StudentModule,
  ],
})
export class AppModule {}
