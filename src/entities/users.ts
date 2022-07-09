import { model, Schema } from 'mongoose';
import { UserModel } from '../models/users';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<UserModel>({
  _id: {
    type: String,
    required: [true, 'Missing ID Value'],
  },

  name: {
    type: String,
    required: [true, 'Missing name Value'],
    unique: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: [true, 'Missing password Value'],
    minlength: [6, 'Password is too short'],
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = model('User', UserSchema);

export { User };
