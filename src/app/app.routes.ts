import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AddTask } from './components/add-task/add-task';
import { TaskList } from './components/task-list/task-list';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { NotFound } from './components/not-found/not-found';
import { Layout } from './components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'addTask',
        component: AddTask,
      },
      {
        path: 'taskList',
        component: TaskList,
        children: [],
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'signUp',
    component: SignUp,
  },
  {
    path: '**',
    component: NotFound,
  },
];
