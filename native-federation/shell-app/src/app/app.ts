import { loadRemoteModule } from '@angular-architects/native-federation';
import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected title = 'shell-app';

  @ViewChild('mfeContainer', { read: ViewContainerRef })
  mfeContainer!: ViewContainerRef;

  async ngAfterViewInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    const component = await loadRemoteModule('remote-app', './Component').then(
      (m) => m.RemoteApp
    );

    this.mfeContainer.createComponent(component);
  }
}
