import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizTopicCardComponent } from './quiz-topic-card.component';

describe('QuizTopicCardComponent', () => {
  let component: QuizTopicCardComponent;
  let fixture: ComponentFixture<QuizTopicCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizTopicCardComponent]
    });
    fixture = TestBed.createComponent(QuizTopicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
