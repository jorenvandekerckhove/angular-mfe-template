import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RemoteApp } from './app/app';

bootstrapApplication(RemoteApp, appConfig).catch((err) => console.error(err));
