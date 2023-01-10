import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  username: string;
  @Prop()
  password: string;
  @Prop()
  email: string;
  @Prop()
  age: number;

  constructor(data?: Partial<User>) {
    super();
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.age = data.age;
  }
}
export const UserSchema = SchemaFactory.createForClass(User);
