import {inject, TestBed} from '@angular/core/testing';

import {SportsScoreService} from './sportsScore.service';

describe('SportsScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportsScoreService]
    });
  });

  it('should be created', inject([SportsScoreService], (service: SportsScoreService) => {
    expect(service).toBeTruthy();
  }));
});
