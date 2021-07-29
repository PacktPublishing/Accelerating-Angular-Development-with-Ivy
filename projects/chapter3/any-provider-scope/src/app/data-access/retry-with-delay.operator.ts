import { concat, throwError } from 'rxjs';
import { delay, retryWhen, take } from 'rxjs/operators';

export const retryWithDelay = <T>(retries: number, delayMs: number) =>
  retryWhen<T>((errors) =>
    concat(
      errors.pipe(delay(delayMs), take(retries)),
      throwError(`Failed after ${retries} retries.`)
    )
  );
