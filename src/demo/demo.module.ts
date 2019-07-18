import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CustomFormsModule } from 'ngx-documents-validators-lib';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {}
