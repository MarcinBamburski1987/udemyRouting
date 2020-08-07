import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieYearsComponent } from './movie-years.component';

describe('MovieYearsComponent', () => {
  let component: MovieYearsComponent;
  let fixture: ComponentFixture<MovieYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
