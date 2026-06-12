import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '../../../shared/models/task.model';
import { TasksService } from '../../../shared/services/tasksService.service';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe],
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
})
export class TaskCard implements OnDestroy, OnChanges {
  @Input({ required: true }) task!: Task;
  @Output() edit = new EventEmitter<Task>();
  private tasksService = inject(TasksService);
  onDeleteTask() {
    this.tasksService.deleteTask(this.task.id);
  }
  onCompleteTask() {
    this.tasksService.markTaskComplete(this.task.id);
  }

  onEditTask() {
    this.edit.emit(this.task);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['task'];
    if (change && !change.firstChange) {
      if (change.currentValue.status !== change.previousValue.status) {
        console.log(`${this.task.title} task has been completed!`);
      } else console.log(`${this.task.title} task has been updated!`);
    }
  }

  ngOnDestroy(): void {
    console.log(`${this.task.title} task has been destroyed`);
  }
}
