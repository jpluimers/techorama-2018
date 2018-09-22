import * as Observable from "rxjs";
import {timer} from "rxjs";
import {concatMap, delay, take, tap} from "rxjs/operators";

export function slide55concatmap() {

  const emulateClicks = timer(0, 1000).pipe(take(2));

  function emulateHttp(indexNumber) {
    return Observable.of(`result ${indexNumber}`).pipe(
      tap(() => console.log(`started http call ${indexNumber}`)),
      delay(indexNumber === 0 ? 3000 : 1000),
      tap(() => console.log(`finished http call ${indexNumber}`)),
    );
  }

  emulateClicks.pipe(
    concatMap(emulateHttp),
    tap(console.log, () => console.log('error'), () => console.log('finished!'))
  ).subscribe();


}
