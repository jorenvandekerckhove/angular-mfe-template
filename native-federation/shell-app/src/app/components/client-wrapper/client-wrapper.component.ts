import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-wrapper',
  templateUrl: './client-wrapper.component.html',
})
export class ClientWrapperComponent implements AfterViewInit {
  protected title = 'shell-app';

  @ViewChild('mfeContainer', { read: ViewContainerRef })
  mfeContainer!: ViewContainerRef;

  async ngAfterViewInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    const component = await loadRemoteModule('client-app', './Component').then(
      (m) => m.ClientApp
    );

    this.mfeContainer.createComponent(component);
  }
}
