import { getModelForClass, prop } from "@typegoose/typegoose";
import { TasksType, TaskType } from "../types/tasksType";

class Tasks implements TasksType {
    @prop()
    owner: string;

    @prop()
    tasks: TaskType[]
}

export const TasksModel = getModelForClass(Tasks)