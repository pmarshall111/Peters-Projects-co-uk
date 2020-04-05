import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[correctEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: CorrectEmail, multi: true}]
})
export class CorrectEmail implements Validator {
  validator: ValidatorFn;

  constructor() {
    this.validator = validateEmailFormat();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.validator(control)
  }
}

// validation function
function validateEmailFormat() : ValidatorFn {
  return (c: AbstractControl) => {

    let regexpEmail = new RegExp('^[a-z0-9._-]+@[a-z0-9]+(.[a-z]{2,4}){1,2}$');
    let isValid = regexpEmail.test(c.value);
    if (isValid) {
      return null;
    } else {
      return {
        valid: false
      }
    }
  }
}
