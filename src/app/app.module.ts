import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'assignment1',
        loadChildren: () =>
          import('./assignment1/assignment1.module').then(
            (m) => m.Assignment1Module
          ),
      },
      {
        path: 'assignment2',
        loadChildren: () =>
          import('./assignment2/assignment2.module').then(
            (m) => m.Assignment2Module
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
