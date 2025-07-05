import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mfe-loader',
  template: '',
})
export class MfeLoaderComponent implements OnInit {
  @Input() remoteUrl!: string; // e.g., http://localhost:4201/
  @Input() elementName!: string; // e.g., mfe-remote

  constructor(private host: ElementRef) {}

  async ngOnInit() {
    await this.loadRemoteScripts([
      // `${this.remoteUrl}polyfills.js`,
      `${this.remoteUrl}main.js`,
    ]);

    const el = document.createElement(this.elementName);
    this.host.nativeElement.appendChild(el);
  }

  private loadRemoteScripts(urls: string[]): Promise<void[]> {
    return Promise.all(
      urls.map((url) => {
        return new Promise<void>((resolve, reject) => {
          if (document.querySelector(`script[src="${url}"]`)) return resolve(); // already loaded
          const script = document.createElement('script');
          script.src = url;
          script.type = 'module'; // only needed during development
          script.crossOrigin = 'anonymous'; // Request uses CORS headers and credentials flag is set to 'same-origin'. There is no exchange of user credentials via cookies, client-side TLS certificates or HTTP authentication, unless destination is the same origin
          script.onload = () => resolve();
          script.onerror = () => reject(new Error(`Script load error: ${url}`));
          document.head.appendChild(script);
        });
      })
    );
  }
}
