import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { TasksType } from '../types/tasksType';
import { TaskInputType } from '../inputs/taskInput';
import { TasksModel } from '../schemas/tasks';

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

	@Query(returns => TasksType!)
	getTasks(@Arg('owner') owner: string): TasksType {
		return {
			owner,
			tasks: this.tasks[owner],
		};
	}

	@Mutation(returns => TasksType!)
	async addNewTask(@Arg('owner') owner: string, @Arg('task') task: TaskInputType): Promise<TasksType> {
		const hasTasks = await TasksModel.findOne({ owner });
		const newTasks: TasksType = hasTasks ?? { owner, tasks: [] };

		newTasks.tasks.push(task);

		hasTasks && (await TasksModel.findOneAndUpdate({ owner }, { ...newTasks }));
		hasTasks || (await TasksModel.create(newTasks));

		return {
			owner: newTasks.owner,
			tasks: newTasks.tasks,
		};
	}
}
