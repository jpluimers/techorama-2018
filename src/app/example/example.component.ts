import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  template: 'Running {{name | async}}, <a routerLink="">go back</a>'
})
export class ExampleComponent {

  name: Observable<string>;

  constructor(route: ActivatedRoute) {
    this.name = route.url.pipe(
      map(url => url[url.length - 1].path),
    );
    route.data.subscribe(data => {
      if (typeof data.fn === 'function') {
        data.fn();
      }
    });
  }
}
