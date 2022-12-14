import request from 'supertest';
import { TypeUser } from '../../schemas/types/userType';

export class UserQueries {
	constructor(private url: string) {}

	async sendQuery(queryData: {}) {
		const response = await request(this.url).post('/').send(queryData);
		return response.body;
	}

	async createUser(user: TypeUser) {
		const queryData = {
			variables: { user },

			query: `#graphql
                mutation CreateUser ($user:userInput!) {
                    createUser (user: $user) {
                        message
                    }
                }`,
		};

		return await this.sendQuery(queryData);
	}

	async getUser(email: string) {
		const queryData = {
			variables: { email },

			query: `#graphql
					query GetUser ($email:String!) {
						getUser (email: $email) {
							message,
							user {
								name, email, password
							}
						}
					}`,
		};

		return await this.sendQuery(queryData);
	}

	async updateUser(email: string, newUser: TypeUser) {
		const queryData = {
			variables: { email, newUser },

			query: `#graphql
				mutation updateUser ($email:String!, $newUser: newUserInput!) {
					updateUser (email:$email, newUser:$newUser) {
						message, user {
							name, email, password
						}
					}
				}`,
		};

		return await this.sendQuery(queryData);
	}
}
