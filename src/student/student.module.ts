import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Student, studentSchema } from './student.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: studentSchema }]),
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
