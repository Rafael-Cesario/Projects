import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../entities/users';
import { authConfig } from '../config/authentication';
import { AuthModel } from '../models/auth';

export const DBauth = async (name: string, password: string): Promise<AuthModel> => {
  const user = await User.findOne({ name: name.toLowerCase().trim() });
  if (!user) throw new Error('Name/Password is wrong');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) throw new Error('Name/Password is wrong');

  const { secret, expiresIn } = authConfig.jwt;
  const token = jwt.sign({}, secret, { subject: `"${user._id}"`, expiresIn });

  return { token, user };
};
