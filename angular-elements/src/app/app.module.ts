import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { NewsComponent } from './news/news.component';
import { createCustomElement } from '@angular/elements';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent, NewsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const element = createCustomElement(NewsComponent, { injector: this.injector });
    customElements.define('app-greet', element);
  }

  ngDoBootstrap() { }

}
