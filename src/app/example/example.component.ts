import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  template: `Running {{name | async}}, <a routerLink="">go back</a>
    <br>Open your browser console to see the output
  `
})
export class ExampleComponent {

  name: Observable<string>;

  constructor(route: ActivatedRoute, httpClient: HttpClient) {
    this.name = route.url.pipe(
      map(url => url[url.length - 1].path),
    );
    route.data.subscribe(data => {
      if (typeof data.fn === 'function') {
        data.fn(httpClient);
      }
    });
  }
}
