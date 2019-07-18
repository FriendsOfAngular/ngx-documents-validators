import { NgModule } from '@angular/core';

import { certificate } from './certidao/validator';

import { CertificateValidator } from './certidao/directive';

export const CustomValidators = [certificate];
const CustomDirectives = [CertificateValidator];

@NgModule({
  declarations: [CustomDirectives],
  exports: [CustomDirectives]
})
export class CustomFormsModule {}
