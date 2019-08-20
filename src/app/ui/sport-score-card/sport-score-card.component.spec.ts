import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SportScoreComponent} from './sport-score-card.component';

describe('SportScoreComponent', () => {
  let component: SportScoreComponent;
  let fixture: ComponentFixture<SportScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SportScoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
