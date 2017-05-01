import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimbingBlogComponent } from './climbing-blog.component';

describe('ClimbingBlogComponent', () => {
  let component: ClimbingBlogComponent;
  let fixture: ComponentFixture<ClimbingBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimbingBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimbingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
