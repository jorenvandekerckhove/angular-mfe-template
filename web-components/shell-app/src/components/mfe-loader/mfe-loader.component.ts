import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MFE_COMPONENTS } from '../../data/mfe-components';

@Component({
  selector: 'app-mfe-loader',
  templateUrl: './mfe-loader.component.html',
  standalone: true,
})
export class MfeLoaderComponent implements AfterViewInit {
  _mfeElement: string = '';
  get mfeElement(): string {
    return this._mfeElement;
  }
  @Input({ required: true }) set mfeElement(value: string) {
    this._mfeElement = value;
    this.loadMfeComponent(value);
  }

  @ViewChild('mfeContainer') mfeContainer!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {
    // If you want to load all the MFE components (you need to update the loadMfeComponent then to append the elements)
    // const keys = MFE_COMPONENTS.keys();
    // let key = keys.next();
    // while (key.value) {
    //   this.loadMfeComponent(key.value!);
    //   key = keys.next();
    // }
  }

  private async loadMfeComponent(elementName: string) {
    const url = MFE_COMPONENTS.get(elementName)!;
    await this.loadMfeScript(`${url}/main.js`);
    const el = document.createElement(elementName);
    const oldChild = this.mfeContainer?.nativeElement.firstChild;
    if (oldChild) this.mfeContainer?.nativeElement.replaceChild(el, oldChild);
    else this.mfeContainer?.nativeElement.appendChild(el);
  }

  private loadMfeScript(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${url}"]`)) return resolve();
      const script = document.createElement('script');
      script.src = url;
      script.type = 'module';
      script.crossOrigin = 'anonymous'; // Request uses CORS headers and credentials flag is set to 'same-origin'. There is no exchange of user credentials via cookies, client-side TLS certificates or HTTP authentication, unless destination is the same origin
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error: ${url}`));
      document.head.appendChild(script);
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
