import { loadRemote as loadModuleRemote } from '@module-federation/enhanced/runtime';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import {
  ClientWrapperComponent,
  WrapperConfig,
} from './components/client-wrapper/client-wrapper.component';

export const routes: Routes = [
  // If you want to load the component via routes and let the <router-outlet></router-outlet> load it
  {
    path: '',
    loadComponent: () =>
      loadNativeRemote('remote-app', './Component').then((m) => m.RemoteApp),
  },
  // The Client Wrapper Component has the Typescript code to load the Client App
  {
    path: 'client-app',
    component: ClientWrapperComponent,
    data: {
      config: {
        kind: 'native',
        remoteName: 'client-app',
        exposedModule: './Component',
        elementName: 'client-app',
      } as WrapperConfig,
    },
  },
  {
    path: 'react-app',
    component: ClientWrapperComponent,
    data: {
      config: {
        kind: 'module',
        remoteName: 'react-app',
        exposedModule: 'App',
        elementName: 'App',
      } as WrapperConfig,
    },
  },
];
