import { IUser } from './userSchemaInterface';

export interface IUserRepository {
	createUser: (user: IUser) => Promise<boolean | { error: string }>;
}
