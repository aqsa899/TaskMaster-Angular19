import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular 19', description: 'Explore new features', completed: false },
    { id: 2, title: 'Build Task Manager', description: 'Step by step', completed: true }
  ];
  newTaskTitle = '';
  newTaskDescription = '';

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      completed: false
    };

    this.tasks.push(newTask);
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }
  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t=>t.id !== taskId);
  }
}
