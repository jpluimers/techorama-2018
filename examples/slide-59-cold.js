import {timer} from "rxjs";
import {take, tap} from "rxjs/operators";

export function slide59cold() {

  const coldObservable = timer(0, 1000).pipe(
    take(5),
    tap(value => console.log(`emitting ${value}`))
  );


  coldObservable.subscribe(value => console.log(`subscription 1 prints ${value}`));

  setTimeout(
    () => coldObservable.subscribe(value => console.log(`subscription 2 prints ${value}`)),
    2500
  );


}
