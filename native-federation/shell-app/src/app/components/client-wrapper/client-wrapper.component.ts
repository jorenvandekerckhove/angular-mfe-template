import { loadRemote as loadModuleRemote } from '@module-federation/enhanced/runtime';
import { loadRemoteModule as loadNativeRemote } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import mf from './remote-loader';

export interface WrapperConfig {
  remoteName: string;
  exposedModule: string;
  elementName: string;
  kind: 'module' | 'native';
}

export const initWrapperConfig: WrapperConfig = {
  remoteName: '',
  exposedModule: '',
  elementName: '',
  kind: 'native',
};

@Component({
  selector: 'app-client-wrapper',
  templateUrl: './client-wrapper.component.html',
})
export class ClientWrapperComponent implements AfterViewInit {
  protected title = 'shell-app';

  // Don't forget to call withComponentInputBinding()
  // in your app.config.ts
  @Input() config = initWrapperConfig;

  @ViewChild('mfeContainer', { read: ViewContainerRef })
  mfeContainer!: ViewContainerRef;

  async ngAfterViewInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    const { exposedModule, remoteName, elementName, kind } = this.config;
    let component;
    if (kind === 'native') {
      component = await loadNativeRemote(remoteName, exposedModule).then(
        (m) => m.ClientApp
      );
      this.mfeContainer.createComponent(component);
    } else {
      const path = [remoteName, exposedModule].join('/');
      await mf.loadRemote(path);
      const root = document.createElement(elementName);
      this.mfeContainer.element.nativeElement.appendChild(root);
    }

    // const component = await loadRemoteModule('client-app', './Component').then(
    //   (m) => m.ClientApp
    // );
  }
}
