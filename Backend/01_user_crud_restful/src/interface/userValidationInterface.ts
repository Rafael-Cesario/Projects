import { IUser } from './userSchemaInterface';

export interface IUserValidation {
	data: (userData: IUser) => (string | boolean)[];
	duplicate: (email: string) => Promise<boolean>;
}
