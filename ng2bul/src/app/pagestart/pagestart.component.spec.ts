/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagestartComponent } from './pagestart.component';

describe('PagestartComponent', () => {
  let component: PagestartComponent;
  let fixture: ComponentFixture<PagestartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagestartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
