import { Arg, Query, Resolver } from 'type-graphql';
import { TasksType } from '../types/tasksType';

@Resolver()
export class TasksResolver {
	private tasks = {
		rafael: [
			{
				status: 'done',
				content: 'just one thing',
			},
		],
	};

	@Query((returns) => TasksType!)
	getTasks(@Arg('owner') owner: string): TasksType {
		return {
			owner,
			tasks: this.tasks[owner],
		};
	}
}
