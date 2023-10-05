import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.model';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async create(studentData): Promise<Student> {
    const student = await new this.studentModel(studentData);
    console.log(`Successfully Create Data is :,${student}`);
    return await student.save();
  }

  async findAll(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }

  async findById(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec();
  }

  async update(id: string, studentData): Promise<Student> {
    return this.studentModel
      .findByIdAndUpdate(id, studentData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Student> {
    return this.studentModel.findByIdAndRemove(id).exec();
  }
}
