import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  boxData = [...Array(40)];
  selection: 'grid' | 'list' = 'grid';

  onInput(target: any) {
    console.warn(target.value);
    this.selection = target.value.toLowerCase().includes('list')
      ? 'list'
      : 'grid';
  }
}
