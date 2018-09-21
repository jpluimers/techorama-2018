import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {routes} from './routes';
import {ExampleComponent} from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([...routes, {path: '', component: IndexComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
