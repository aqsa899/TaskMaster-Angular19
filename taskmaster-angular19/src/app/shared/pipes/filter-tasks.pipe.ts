import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../models/task.model';

@Pipe({
  name: 'filterTasks'
})
export class FilterTasksPipe implements PipeTransform {

  transform(tasks: Task[],  filter:'all' | 'completed' | 'pending'): Task[] {
    if(!tasks) return [];
    switch(filter){
      case 'completed':
        return tasks.filter(task=>task.completed);
        case 'pending':
          return tasks.filter(task=>!task.completed);
          default:
            return tasks;
    }
  }

}
