import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../tokens';
import { Store } from '@ngrx/store';
import { addTaskAction } from '../store/actions';
import { tap } from 'rxjs/operators';
import { DexieService } from './dexie.service';

export interface Task {
  title: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
    private store: Store<{ tasks: Task[] }>,
    private dexieService: DexieService
  ) { }

  getTasks() {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);
  }

  addTask(task: Task) {
    return this.http.post(`${this.apiUrl}/tasks`, task).pipe(
      tap(() => {
        this.store.dispatch(addTaskAction({ task }));
        this.dexieService.tasks.add(task);
      })
    );
  }
}
