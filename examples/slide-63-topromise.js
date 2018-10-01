import {timer} from "rxjs";
import {take} from "rxjs/operators";

export function slide63topromise(httpClient) {

  // toPromise waits for the Observable to complete, and then emits the single one last emission from the observable
  timer(0, 1000).pipe(take(3)).toPromise().then(console.log);

}
