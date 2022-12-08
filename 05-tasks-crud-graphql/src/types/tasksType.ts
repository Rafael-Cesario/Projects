import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class TaskType {
	@Field()
	status: string;

	@Field()
	content: string;
}

@ObjectType()
export class TasksType {
	@Field()
	owner: string;

	@Field((type) => [TaskType])
	tasks: TaskType[];
}
