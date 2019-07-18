import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const certificate: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  const v: string = control.value;
  const sanitized = v.replace(/\D/g, '');

  /**
   *
   * @param certificateNumber certificate number
   */
  const hasValidYear = (certificateNumber: string): boolean => {
    const year = parseInt(certificateNumber.substr(10, 4), 10);
    return year >= 2010 && year <= new Date().getFullYear();
  };

  /**
   *
   * @param certificateNumber certificate number
   */
  const hasValidFirstDigit = (certificateNumber: string): boolean => {
    const multipliers: any = [2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (let i = 0; i < 30; i++) {
      const certificateDigit = parseInt(certificateNumber.substr(i, 1), 10);
      sum += certificateDigit * multipliers[i];
    }
    const remainder = sum % 11;
    if (remainder === 10) {
      return certificateNumber.substr(30, 1) === '1';
    }
    return certificateNumber.substr(30, 1) === remainder.toString();
  };

  /**
   *
   * @param certificateNumber certificate number
   */
  const hasValidSecondDigit = (certificateNumber: string): boolean => {
    const multipliers: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = 0;
    for (let i = 0; i < 31; i++) {
      const certificateDigit = parseInt(certificateNumber.substr(i, 1), 10);
      sum += certificateDigit * multipliers[i];
    }
    const remainder = sum % 11;
    if (remainder === 10) {
      return certificateNumber.substr(31, 1) === '1';
    }
    return certificateNumber.substr(31, 1) === remainder.toString();
  };

  if (sanitized.length !== 32) {
    return {
      number: 'O número da certidão precisa conter 32 dígitos.'
    };
  } else if (!hasValidYear(sanitized)) {
    return {
      number: 'Número da certidão inválido.'
    };
  } else if (!hasValidFirstDigit(sanitized)) {
    return {
      number: 'Número da certidão inválido.'
    };
  } else if (!hasValidSecondDigit(sanitized)) {
    return {
      number: 'Número da certidão inválido.'
    };
  }

  return null;
};
