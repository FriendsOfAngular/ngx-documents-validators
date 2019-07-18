import { FormControl } from '@angular/forms';

import { certificate } from './validator';

describe('CertificateNumber', () => {
  const error = { number: 'Número da certidão inválido.' };

  it('"16914101552017129005239655157198" should be certificate number', () => {
    const control = new FormControl('16914101552017129005239655157198');
    expect(certificate(control)).toBeNull();
  });

  it('"16914101552017129005239655157196" should not be certificate number', () => {
    const control = new FormControl('16914101552017129005239655157196');
    expect(certificate(control)).toEqual(error);
  });

  it('"16914101552020129005239655157198" should not be certificate number', () => {
    const control = new FormControl('16914101552020129005239655157198');
    expect(certificate(control)).toEqual(error);
  });
});
