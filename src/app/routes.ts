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
import {slide20pitfalls} from '../../examples/slide-20-pitfalls';
import {slide22pitfalls} from '../../examples/slide-22-pitfalls';
import {slide28bonus} from '../../examples/slide-28-bonus';
import {slide31observables} from '../../examples/slide-31-observables';
import {slide34observables} from '../../examples/slide-34-observables';
import {slide42map} from '../../examples/slide-42-map';
import {slide99together} from '../../examples/slide-99-together';

export const routes: Routes = [
  {path: 'slide-0-empty', component: ExampleComponent, data: {fn: slide0empty}},
  {path: 'slide-7-fetch', component: ExampleComponent, data: {fn: slide7fetch}},
  {path: 'slide-8-fetch', component: ExampleComponent, data: {fn: slide8fetch}},
  {path: 'slide-9-fetch', component: ExampleComponent, data: {fn: slide9fetch}},
  {path: 'slide-10-fetch', component: ExampleComponent, data: {fn: slide10fetch}},
  {path: 'slide-12-fetch', component: ExampleComponent, data: {fn: slide12fetch}},
  {path: 'slide-13-fetch', component: ExampleComponent, data: {fn: slide13fetch}},
  {path: 'slide-14-fetch', component: ExampleComponent, data: {fn: slide14fetch}},
  {path: 'slide-20-pitfalls', component: ExampleComponent, data: {fn: slide20pitfalls}},
  {path: 'slide-22-pitfalls', component: ExampleComponent, data: {fn: slide22pitfalls}},
  {path: 'slide-28-bonus', component: ExampleComponent, data: {fn: slide28bonus}},
  {path: 'slide-31-observables', component: ExampleComponent, data: {fn: slide31observables}},
  {path: 'slide-34-observables', component: ExampleComponent, data: {fn: slide34observables}},
  {path: 'slide-42-map', component: ExampleComponent, data: {fn: slide42map}},
  {path: 'slide-99-together', component: ExampleComponent, data: {fn: slide99together}}
];
