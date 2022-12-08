import { Arg, Query, Resolver } from 'type-graphql';
import { TaskType } from '../types/tasksType';

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

	@Query((returns) => [TaskType])
	getTasks(@Arg('input') belongsTo: string): TaskType[] {
		return this.tasks[belongsTo];
	}
}
