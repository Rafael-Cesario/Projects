import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { TasksType } from '../types/tasksType';
import { TaskInputType } from '../inputs/taskInput';

@Resolver()
export class TasksResolver {
	private tasks = {
		rafael: [
			{
				content: 'just one thing',
				status: 'done',
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

	@Mutation((returns) => TasksType!)
	addNewTask(@Arg('owner') owner: string, @Arg('task') task: TaskInputType): TasksType {
		this.tasks[owner].push(task);

		return {
			owner,
			tasks: this.tasks[owner],
		};
	}
}
