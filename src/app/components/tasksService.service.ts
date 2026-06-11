import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks: Task[] = [
    {
      id: crypto.randomUUID(),
      title: 'Implement Carousel Slider',
      description: 'Implement Carousel Slider with timer',
      priority: 'high',
      dueDate: '2026-06-12',
      category: 'work',
      tags: 'SW',
      status: 'notDone',
    },
  ];

  getTask(id: string) {
    return this.tasks.filter((task) => task.id === id);
  }
  addTask(task: Task) {
    this.tasks?.unshift(task);
  }
  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map((t) => (t.id === updatedTask.id ? { ...t, ...updatedTask } : t));
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
  markTaskComplete(id: string) {
    this.tasks = this.tasks.map((task) => (task.id === id ? { ...task, status: 'done' } : task));
  }
}
