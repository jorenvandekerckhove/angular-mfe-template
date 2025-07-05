import { Component } from '@angular/core';
import { MfeLoaderComponent } from '../components/mfe-loader/mfe-loader.component';
import { MaterialModule } from '../core/core.module';

@Component({
  selector: 'app-root',
  imports: [MfeLoaderComponent, MaterialModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  mfeElement: string = 'remote-app';
  protected title = 'shell-app';

  changeMfeUrl(element: string) {
    this.mfeElement = element;
  }
}
