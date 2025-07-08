import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { ClientWrapperComponent } from './components/client-wrapper/client-wrapper.component';

export const routes: Routes = [
  // If you want to load the component via routes and let the <router-outlet></router-outlet> load it
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('remote-app', './Component').then((m) => m.RemoteApp),
  },
  {
    path: 'client-app',
    component: ClientWrapperComponent,
  },
];
