import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { FilterTasksPipe } from '../../shared/pipes/filter-tasks.pipe';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule, CommonModule, FilterTasksPipe],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  tasks: Task[] = [];
  newTaskTitle = '';
  newTaskDescription = '';
  taskFilter: 'all' | 'completed' | 'pending' = 'all';

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe(tasks => this.tasks = tasks);
  }

  addTask() {
    if (!this.newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: this.newTaskTitle,
      description: this.newTaskDescription,
      completed: false
    };

    this.taskService.addTask(newTask);
    this.newTaskTitle = '';
    this.newTaskDescription = '';
  }

  toggleComplete(task: Task) {
    this.taskService.toggleComplete(task.id);
  }

  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }
}
