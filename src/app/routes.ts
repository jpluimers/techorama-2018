import {Routes} from '@angular/router';
import {ExampleComponent} from './example/example.component';
import {slide0empty} from '../../examples/slide-0-empty';
import {slide7fetch} from '../../examples/slide-7-fetch';
import {slide8fetch} from '../../examples/slide-8-fetch';
import {slide9fetch} from '../../examples/slide-9-fetch';
import {slide10fetch} from '../../examples/slide-10-fetch';
import {slide12fetch} from '../../examples/slide-12-fetch';
import {slide13fetch} from '../../examples/slide-13-fetch';
import {slide14fetch} from '../../examples/slide-14-fetch';

export const routes: Routes = [
  {path: 'slide-0-empty', component: ExampleComponent, data: {fn: slide0empty}},
  {path: 'slide-7-fetch', component: ExampleComponent, data: {fn: slide7fetch}},
  {path: 'slide-8-fetch', component: ExampleComponent, data: {fn: slide8fetch}},
  {path: 'slide-9-fetch', component: ExampleComponent, data: {fn: slide9fetch}},
  {path: 'slide-10-fetch', component: ExampleComponent, data: {fn: slide10fetch}},
  {path: 'slide-12-fetch', component: ExampleComponent, data: {fn: slide12fetch}},
  {path: 'slide-13-fetch', component: ExampleComponent, data: {fn: slide13fetch}},
  {path: 'slide-14-fetch', component: ExampleComponent, data: {fn: slide14fetch}}
];
