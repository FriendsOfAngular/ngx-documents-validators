import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { certificate } from './validator';

const CERTIFICATE_NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CertificateValidator),
  multi: true
};

@Directive({
  selector:
    '[certificateNumber][formControlName],[certificateNumber][formControl],[certificateNumber][ngModel]',
  providers: [CERTIFICATE_NUMBER_VALIDATOR]
})
export class CertificateValidator implements Validator {
  validate(c: AbstractControl): { [key: string]: any } {
    return certificate(c);
  }
}
