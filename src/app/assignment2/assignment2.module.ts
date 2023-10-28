import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment2Component } from './assignment2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Assignment2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Assignment2Component }]),
  ],
})
export class Assignment2Module {}
