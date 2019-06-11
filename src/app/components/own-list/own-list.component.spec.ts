import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnListComponent } from './own-list.component';

describe('OwnListComponent', () => {
  let component: OwnListComponent;
  let fixture: ComponentFixture<OwnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
