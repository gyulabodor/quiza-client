import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotExistingPageComponent } from './not-existing-page.component';

describe('ErrorComponent', () => {
  let component: NotExistingPageComponent;
  let fixture: ComponentFixture<NotExistingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotExistingPageComponent]
    });
    fixture = TestBed.createComponent(NotExistingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
