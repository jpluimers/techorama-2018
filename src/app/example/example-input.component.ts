import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  template: `Running {{name | async}}, <a routerLink="">go back</a>
    <input #input type="text">
    <br>Open your browser console to see the output
  `
})
export class ExampleInputComponent implements AfterViewInit {

  @ViewChild('input') input;

  name: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.name = this.route.url.pipe(
      map(url => url[url.length - 1].path),
    );
    this.route.data.subscribe(data => {
      if (typeof data.fn === 'function') {
        data.fn(this.input.nativeElement);
      }
    });
  }


}
