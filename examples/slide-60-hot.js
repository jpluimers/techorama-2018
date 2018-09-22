import {Subject, timer} from "rxjs";
import {take, tap} from "rxjs/operators";

export function slide60hot() {

  const hotObservable = new Subject();
  timer(0, 1000).pipe(
    take(5),
    tap(value => console.log(`emitting ${value}`))
  ).subscribe(value => hotObservable.next(value));

  hotObservable.subscribe(value => console.log(`subscription 1 prints ${value}`));

  setTimeout(
    () => hotObservable.subscribe(value => console.log(`subscription 2 prints ${value}`)),
    2500
  );


}
