import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';

import { ValidationStatus } from './validation-status';

export function validValueChanges<T>(control: FormControl): Observable<T> {
  return (control.statusChanges as Observable<ValidationStatus>).pipe(
    filter((status) => status === 'VALID'),
    withLatestFrom(control.valueChanges as Observable<T>),
    map(([_, value]) => value)
  );
}
