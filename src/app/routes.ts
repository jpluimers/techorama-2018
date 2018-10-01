import {Routes} from '@angular/router';
import {ExampleComponent} from './example/example.component';
import {ExampleInputComponent} from './example/example-input.component';
import {slide0empty} from '../../examples/slide-0-empty';
import {slide7fetch} from '../../examples/slide-7-fetch';
import {slide8fetch} from '../../examples/slide-8-fetch';
import {slide9fetch} from '../../examples/slide-9-fetch';
import {slide10fetch} from '../../examples/slide-10-fetch';
import {slide11beforepromises} from '../../examples/slide-11-beforepromises';
import {slide12fetch} from '../../examples/slide-12-fetch';
import {slide13fetch} from '../../examples/slide-13-fetch';
import {slide14fetch} from '../../examples/slide-14-fetch';
import {slide20pitfalls} from '../../examples/slide-20-pitfalls';
import {slide22pitfalls} from '../../examples/slide-22-pitfalls';
import {slide25trycatch} from '../../examples/slide-25-try-catch';
import {slide26bonus} from '../../examples/slide-26-bonus';
import {slide28throttle} from '../../examples/slide-28-throttle';
import {slide31observables} from '../../examples/slide-31-observables';
import {slide34observables} from '../../examples/slide-34-observables';
import {slide42map} from '../../examples/slide-42-map';
import {slide47operators} from '../../examples/slide-47-operators';
import {slide50flatmap} from '../../examples/slide-50-flatmap';
import {slide51switchmap} from '../../examples/slide-51-switchmap';
import {slide52flatmaps} from '../../examples/slide-52-flatmaps';
import {slide54mergemap} from '../../examples/slide-54-mergemap';
import {slide55concatmap} from '../../examples/slide-55-concatmap';
import {slide56switchmap} from '../../examples/slide-56-switchmap';
import {slide57exhaustmap} from '../../examples/slide-57-exhaustmap';
import {slide59cold} from '../../examples/slide-59-cold';
import {slide60hot} from '../../examples/slide-60-hot';
import {slide61share} from '../../examples/slide-61-share';
import {slide62sharereplay} from '../../examples/slide-62-sharereplay';
import {slide63topromise} from '../../examples/slide-63-topromise';
import {slide99together} from '../../examples/slide-99-together';
import {slide999empty} from '../../examples/slide-999-empty';

export const routes: Routes = [
  {path: 'slide-0-empty', component: ExampleComponent, data: {fn: slide0empty}},
  {path: 'slide-7-fetch', component: ExampleComponent, data: {fn: slide7fetch}},
  {path: 'slide-8-fetch', component: ExampleComponent, data: {fn: slide8fetch}},
  {path: 'slide-9-fetch', component: ExampleComponent, data: {fn: slide9fetch}},
  {path: 'slide-10-fetch', component: ExampleComponent, data: {fn: slide10fetch}},
  {path: 'slide-11-beforepromises', component: ExampleComponent, data: {fn: slide11beforepromises}},
  {path: 'slide-12-fetch', component: ExampleComponent, data: {fn: slide12fetch}},
  {path: 'slide-13-fetch', component: ExampleComponent, data: {fn: slide13fetch}},
  {path: 'slide-14-fetch', component: ExampleComponent, data: {fn: slide14fetch}},
  {path: 'slide-20-pitfalls', component: ExampleComponent, data: {fn: slide20pitfalls}},
  {path: 'slide-22-pitfalls', component: ExampleComponent, data: {fn: slide22pitfalls}},
  {path: 'slide-25-trycatch', component: ExampleComponent, data: {fn: slide25trycatch}},
  {path: 'slide-26-bonus', component: ExampleComponent, data: {fn: slide26bonus}},
  {path: 'slide-28-throttle', component: ExampleInputComponent, data: {fn: slide28throttle}},
  {path: 'slide-31-observables', component: ExampleComponent, data: {fn: slide31observables}},
  {path: 'slide-34-observables', component: ExampleComponent, data: {fn: slide34observables}},
  {path: 'slide-42-map', component: ExampleComponent, data: {fn: slide42map}},
  {path: 'slide-47-operators', component: ExampleComponent, data: {fn: slide47operators}},
  {path: 'slide-50-flatmap', component: ExampleComponent, data: {fn: slide50flatmap}},
  {path: 'slide-51-switchmap', component: ExampleComponent, data: {fn: slide51switchmap}},
  {path: 'slide-52-flatmaps', component: ExampleComponent, data: {fn: slide52flatmaps}},
  {path: 'slide-54-mergemap', component: ExampleComponent, data: {fn: slide54mergemap}},
  {path: 'slide-55-concatmap', component: ExampleComponent, data: {fn: slide55concatmap}},
  {path: 'slide-56-switchmap', component: ExampleComponent, data: {fn: slide56switchmap}},
  {path: 'slide-57-exhaustmap', component: ExampleComponent, data: {fn: slide57exhaustmap}},
  {path: 'slide-59-cold', component: ExampleComponent, data: {fn: slide59cold}},
  {path: 'slide-60-hot', component: ExampleComponent, data: {fn: slide60hot}},
  {path: 'slide-61-share', component: ExampleComponent, data: {fn: slide61share}},
  {path: 'slide-62-sharereplay', component: ExampleComponent, data: {fn: slide62sharereplay}},
  {path: 'slide-63-topromise', component: ExampleComponent, data: {fn: slide63topromise}},
  {path: 'slide-99-together', component: ExampleComponent, data: {fn: slide99together}},
  {path: 'slide-999-empty', component: ExampleInputComponent, data: {fn: slide999empty}}
];
