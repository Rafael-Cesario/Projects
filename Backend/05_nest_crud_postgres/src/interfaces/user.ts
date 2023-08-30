export interface IUser {
	id: string;
	email: string;
	name: string;
	password: string;
}

export interface ICreateUser {
	email: string;
	name: string;
	password: string;
}

export interface IUpdateUser {
	id: string;
	password: string;
	newUser: {
		name: string;
		email: string;
		password: string;
	};
}

export interface IDeleteUser {
	id: string;
	password: string;
}
