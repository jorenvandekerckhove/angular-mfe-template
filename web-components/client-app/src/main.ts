import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { createCustomElement } from '@angular/elements';

async function createStandaloneApp() {
  const app = await createApplication(appConfig);

  const customElement = createCustomElement(App, {
    injector: app.injector,
  });

  customElements.define('client-app', customElement);
}

createStandaloneApp().catch((err) => console.error(err));
