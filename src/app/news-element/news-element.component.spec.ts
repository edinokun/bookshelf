import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsElementComponent } from './news-element.component';

describe('NewsElementComponent', () => {
  let component: NewsElementComponent;
  let fixture: ComponentFixture<NewsElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsElementComponent]
    });
    fixture = TestBed.createComponent(NewsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
