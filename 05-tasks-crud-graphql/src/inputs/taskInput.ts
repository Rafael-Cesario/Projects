import { Field, InputType } from 'type-graphql';
import { TaskType } from '../types/tasksType';

@InputType()
export class TaskInputType implements TaskType {
	@Field()
	status: string;

	@Field()
	content: string;
}
