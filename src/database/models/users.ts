import { model, Schema } from 'mongoose';
import { UserModel } from '../../graphql/models/users';

const UserSchema = new Schema<UserModel>({
  _id: { type: String, required: [true, 'Missing ID Value'] },
  name: { type: String, required: [true, 'Missing name Value'] },
  password: { type: String, required: [true, 'Missing password Value'] },
});

const User = model('User', UserSchema);

export { User };
