import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Address } from '../dto/create-client.dto';

@Schema()
export class Client extends Document {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  tel: number;
  @Prop()
  address: Address;
  @Prop()
  cpf: string;
}
export const ClientSchema = SchemaFactory.createForClass(Client);
