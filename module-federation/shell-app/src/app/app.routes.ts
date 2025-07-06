import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // If you want to load the component via routes and let the <router-outlet/> load it
  {
    path: '',
    loadComponent: () =>
      loadRemoteModule('remote-app', './Component').then((m) => m.RemoteApp),
  },
];
