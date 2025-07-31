import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  private tasksSubject = new BehaviorSubject<Task[]>([
    { id: 1, title: 'Learn Angular 19', description: 'Explore new features', completed: false },
    { id: 2, title: 'Build Task Manager', description: 'Step by step', completed: true }
  ]);

  tasks$ = this.tasksSubject.asObservable();

  get tasks(): Task[] {
    return this.tasksSubject.value;
  }

  addTask(task: Task) {
    this.tasksSubject.next([...this.tasksSubject.value, task]);
  }

  toggleComplete(taskId: number) {
    const updated = this.tasks.map(t =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    this.tasksSubject.next(updated);
  }

  deleteTask(taskId: number) {
    const updated = this.tasks.filter(t => t.id !== taskId);
    this.tasksSubject.next(updated);
  }
}
