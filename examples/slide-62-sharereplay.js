import * as Observable from "rxjs";
import {delay, shareReplay, tap} from "rxjs/operators";

export function slide62sharereplay() {

  const emulatingHttpCall = Observable.of('resolved value!').pipe(
    tap(() => console.log('triggered request')),
    delay(1000),
    shareReplay()
  );

  emulatingHttpCall.subscribe(console.log);
  setTimeout(() => emulatingHttpCall.subscribe(console.log), 500);
  setTimeout(() => emulatingHttpCall.subscribe(console.log), 2000);

}
