import { createAction, props } from '@ngrx/store';
import { Task } from '../services/task.service';

export const addTaskAction = createAction(
  '[Task] Add Task',
  props<{ task: Task }>()
);
