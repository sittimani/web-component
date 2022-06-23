import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-component-test';
  constructor(private injector: Injector) {
    const element = createCustomElement(NewsComponent, { injector: this.injector });
    customElements.define('app-greet', element);
  }
}
