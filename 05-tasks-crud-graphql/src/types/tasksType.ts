import { Field, ObjectType } from 'type-graphql';

type TTask = {
	status: string;
	content: string;
};

@ObjectType()
class TaskType implements TTask {
	@Field()
	status: string;

	@Field()
	content: string;
}

type TTasks = {
	belongsTo: string;
	tasks: TTask[];
};

@ObjectType()
export class TasksType implements TTasks {
	@Field()
	belongsTo: string;

	@Field((type) => [TaskType])
	tasks: TTask[];
}
