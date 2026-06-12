import { Routes } from '@angular/router';
import { Layout } from './components/layout/layout';
import { AuthGuard } from './shared/guards/auth.guard';

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
        loadComponent: () => import('./components/home/home').then((m) => m.Home),
      },
      {
        path: 'addTask',
        loadComponent: () => import('./components/add-task/add-task').then((m) => m.AddTask),
        canActivate: [AuthGuard],
      },
      {
        path: 'taskList',
        loadComponent: () => import('./components/task-list/task-list').then((m) => m.TaskList),
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then((m) => m.Login),
  },
  {
    path: 'signUp',
    loadComponent: () => import('./components/sign-up/sign-up').then((m) => m.SignUp),
  },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found').then((m) => m.NotFound),
  },
];
