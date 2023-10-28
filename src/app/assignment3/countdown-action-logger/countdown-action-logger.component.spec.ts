import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownActionLoggerComponent } from './countdown-action-logger.component';

describe('CountdownActionLoggerComponent', () => {
  let component: CountdownActionLoggerComponent;
  let fixture: ComponentFixture<CountdownActionLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownActionLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownActionLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
