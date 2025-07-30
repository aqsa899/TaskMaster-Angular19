import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  total = 0;
  completed = 0;
  pending = 0;

  constructor(private taskService: TaskService) {
    this.taskService.tasks$.subscribe(tasks => {
      this.total = tasks.length;
      this.completed = tasks.filter(t => t.completed).length;
      this.pending = tasks.filter(t => !t.completed).length;
    });
  }
}
