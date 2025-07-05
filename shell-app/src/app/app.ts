import { Component } from '@angular/core';
import { MfeLoaderComponent } from './mfe-loader.component';

@Component({
  selector: 'app-root',
  imports: [MfeLoaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected title = 'shell-app';
}
