import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment3Component } from './assignment3.component';
import { RouterModule } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownControlsComponent } from './countdown-controls/countdown-controls.component';
import { CountdownActionLoggerComponent } from './countdown-action-logger/countdown-action-logger.component';
import { CountdownActionCounterComponent } from './countdown-action-counter/countdown-action-counter.component';

@NgModule({
  declarations: [Assignment3Component, CountdownTimerComponent, CountdownControlsComponent, CountdownActionLoggerComponent, CountdownActionCounterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Assignment3Component }]),
  ],
})
export class Assignment3Module {}
