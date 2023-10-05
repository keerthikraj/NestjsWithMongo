import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

import { StudentService } from './student.service';
import { Student } from './student.model';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() StudentData: Student): Promise<Student> {
    return this.studentService.create(StudentData);
  }

  @Get()
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Student> {
    return this.studentService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() studentData: Student,
  ): Promise<Student> {
    return this.studentService.update(id, studentData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Student> {
    return this.studentService.delete(id);
  }
}
