import * as Observable from "rxjs";
import {delay, share, tap} from "rxjs/operators";

export function slide61share() {

  const emulatingHttpCall = Observable.of('resolved value!').pipe(
    tap(() => console.log('triggered request')),
    delay(1000),
    share()
  );

  emulatingHttpCall.subscribe(console.log);
  setTimeout(() => emulatingHttpCall.subscribe(console.log), 500);
  setTimeout(() => emulatingHttpCall.subscribe(console.log), 2000);

}
