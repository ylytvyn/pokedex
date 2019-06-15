import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPokemonComponent } from './own-pokemon.component';

describe('OwnPokemonComponent', () => {
  let component: OwnPokemonComponent;
  let fixture: ComponentFixture<OwnPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
