import { createReducer, on } from '@ngrx/store';
import { addTaskAction } from './actions';
import { Task } from '../services/task.service';

export interface AppState {
  tasks: Task[];
}

export const initialState: AppState = {
  tasks: []
};

export const appReducer = createReducer(
  initialState,
  on(addTaskAction, (state, { task }) => ({
    ...state,
    tasks: [...state.tasks, task]
  }))
);
