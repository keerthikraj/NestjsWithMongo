import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Student extends Document {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  age: number;

  @Prop()
  class: string;

  @Prop()
  parent_PhoneNo: string;
}

export const studentSchema = SchemaFactory.createForClass(Student);
