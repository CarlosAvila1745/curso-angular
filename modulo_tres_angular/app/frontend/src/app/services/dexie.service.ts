import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Task } from './task.service';

@Injectable({
  providedIn: 'root'
})
export class DexieService extends Dexie {
  tasks!: Table<Task, number>;

  constructor() {
    super('TaskDB');
    this.version(1).stores({
      tasks: '++id,title,description'
    });
  }
}
