import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskCard } from './task-card/task-card';
import { Task } from '../../shared/models/task.model';
import { TasksService } from '../../shared/services/tasksService.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskCard],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Output() edit = new EventEmitter<Task>();
  tasksStatus = 'all';
  taskservices = inject(TasksService);

  get filteredTasks() {
    if (this.tasksStatus === 'done')
      return this.taskservices.tasks.filter((task) => task.status === 'done');
    if (this.tasksStatus === 'notDone')
      return this.taskservices.tasks.filter((task) => task.status === 'notDone');
    return this.taskservices.tasks;
  }
}
