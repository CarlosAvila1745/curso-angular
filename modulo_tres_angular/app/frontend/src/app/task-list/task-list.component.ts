import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../services/task.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;
  newTaskTitle = '';

  constructor(private store: Store<{ tasks: Task[] }>, private taskService: TaskService) { }

  ngOnInit() {
    this.tasks$ = this.store.select(state => state.tasks);
    this.taskService.getTasks().subscribe();
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask({ title: this.newTaskTitle.trim() }).subscribe(() => {
        this.newTaskTitle = '';
      });
    }
  }
}
