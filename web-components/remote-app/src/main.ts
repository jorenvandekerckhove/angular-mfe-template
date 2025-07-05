import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

async function createStandaloneApp() {
  const app = await createApplication(appConfig);

  const customElement = createCustomElement(App, {
    injector: app.injector,
  });

  customElements.define("remote-app", customElement);
}

createStandaloneApp().catch((err) => console.error(err));

// Another option is to bootstrap the application separately and create the custom element
// but this is not needed because the shell app loads this remote app

// bootstrapApplication(App, appConfig)
//   .then((appRef) => {
//     const injector = appRef.injector;
//     const customEl = createCustomElement(App, { injector });
//     customElements.define('remote-app', customEl); // define custom element
//   })
//   .catch((err) => console.error(err));
