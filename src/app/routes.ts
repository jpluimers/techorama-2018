import {Routes} from '@angular/router';
import {ExampleComponent} from './example/example.component';
import {slide0empty} from '../../examples/slide-0-empty';
import {slide7fetch} from '../../examples/slide-7-fetch';
import {slide8fetch} from '../../examples/slide-8-fetch';
import {slide9fetch} from '../../examples/slide-9-fetch';

export const routes: Routes = [
  {path: 'slide-0-empty', component: ExampleComponent, data: {fn: slide0empty}},
  {path: 'slide-7-fetch', component: ExampleComponent, data: {fn: slide7fetch}},
  {path: 'slide-8-fetch', component: ExampleComponent, data: {fn: slide8fetch}},
  {path: 'slide-9-fetch', component: ExampleComponent, data: {fn: slide9fetch}}
];
