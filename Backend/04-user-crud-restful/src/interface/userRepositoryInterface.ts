import { IUser } from './userSchemaInterface';

export interface IUserRepository {
	createUser: (user: IUser) => Promise<boolean | string>;
	findByEmail(email: string): Promise< IUser | string>;
}
