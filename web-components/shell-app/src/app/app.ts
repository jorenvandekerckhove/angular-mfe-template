import { Component } from '@angular/core';
import { MfeLoaderComponent } from '../components/mfe-loader/mfe-loader.component';
import {
  MatDrawerContent,
  MatDrawer,
  MatDrawerContainer,
} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MfeLoaderComponent,
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    MatButtonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  mfeUrl: string = 'http://localhost:4201/';
  mfeElement: string = 'remote-app';
  protected title = 'shell-app';

  changeMfeUrl(url: string, element: string) {
    this.mfeUrl = url;
    this.mfeElement = element;
  }
}
