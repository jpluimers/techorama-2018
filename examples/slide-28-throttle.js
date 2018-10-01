import {fromEvent} from "rxjs";
import {debounceTime} from "rxjs/operators";


export async function slide28throttle(input) {

  const DEBOUNCE_TIME = 500;

  // without rxjs

  let timeout;

  input.oninput = () => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => console.log(input.value),
      DEBOUNCE_TIME
    )};


  // with rxjs

  const keyPresses = fromEvent(input, 'input');

  keyPresses.pipe(
    debounceTime(DEBOUNCE_TIME)
  ).subscribe(
    () => console.log(input.value)
  );

}
