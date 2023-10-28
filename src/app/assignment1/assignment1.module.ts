import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment1Component } from './assignment1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Assignment1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Assignment1Component }]),
  ],
})
export class Assignment1Module {}
