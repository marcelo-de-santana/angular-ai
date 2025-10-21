import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'chat-simples',
    loadComponent: () =>
      import('./chat/chat-simples/chat-simples').then((component) => component.ChatSimples),
  },
  { path: '**', redirectTo: 'chat-simples' },
];
