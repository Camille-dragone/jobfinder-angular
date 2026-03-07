import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardformulaire } from './cardformulaire';

describe('Cardformulaire', () => {
  let component: Cardformulaire;
  let fixture: ComponentFixture<Cardformulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardformulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardformulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
