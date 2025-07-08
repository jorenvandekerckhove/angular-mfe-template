import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ClientApp } from './app/app';

bootstrapApplication(ClientApp, appConfig).catch((err) => console.error(err));
