import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransModalPage } from './trans-modal.page';

describe('TransModalPage', () => {
  let component: TransModalPage;
  let fixture: ComponentFixture<TransModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
