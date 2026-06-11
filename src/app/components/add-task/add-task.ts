import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TasksService } from '../tasksService.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask implements OnChanges {
  @Output() add = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();
  @Input() taskToEdit?: Task;
  taskServices = inject(TasksService);

  enteredTitle = '';
  enteredDescription = '';
  enteredDate = '';
  enteredPriority = '';
  enteredCategory = '';
  enteredTags = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToEdit'] && this.taskToEdit) {
      this.enteredTitle = this.taskToEdit.title;
      this.enteredDescription = this.taskToEdit.description;
      this.enteredDate = this.taskToEdit.dueDate;
      this.enteredPriority = this.taskToEdit.priority;
      this.enteredCategory = this.taskToEdit.category;
      this.enteredTags = this.taskToEdit.tags;
    }
  }

  onSubmitTask() {
    this.taskServices.addTask({
      id: this.taskToEdit?.id ?? crypto.randomUUID(),
      title: this.enteredTitle,
      description: this.enteredDescription,
      dueDate: this.enteredDate,
      priority: this.enteredPriority,
      category: this.enteredCategory,
      tags: this.enteredTags,
      status: this.taskToEdit?.status ?? 'notDone',
    });
  }
  onCancelTask() {
    this.cancel.emit();
  }
}
