import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingNewsComponent } from './trending-news.component';

describe('TrendingNewsComponent', () => {
  let component: TrendingNewsComponent;
  let fixture: ComponentFixture<TrendingNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
