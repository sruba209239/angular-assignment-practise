import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownActionCounterComponent } from './countdown-action-counter.component';

describe('CountdownActionCounterComponent', () => {
  let component: CountdownActionCounterComponent;
  let fixture: ComponentFixture<CountdownActionCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownActionCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownActionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
