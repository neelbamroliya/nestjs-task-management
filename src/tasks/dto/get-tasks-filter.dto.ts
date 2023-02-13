import { taskStatus } from '../tasks.model';

export class getTasksFilterDto {
  status: taskStatus;
  search: string;
}
