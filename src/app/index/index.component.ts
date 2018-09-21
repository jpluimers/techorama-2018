import {Component} from '@angular/core';
import {routes} from '../routes';

@Component({
  templateUrl: './index.component.html',
  styles: ['a {text-decoration: none}']
})
export class IndexComponent {

  routes = routes;

}
