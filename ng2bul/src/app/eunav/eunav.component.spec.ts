/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EunavComponent } from './eunav.component';

describe('EunavComponent', () => {
  let component: EunavComponent;
  let fixture: ComponentFixture<EunavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EunavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EunavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
