import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carddescription } from './carddescription';

describe('Carddescription', () => {
  let component: Carddescription;
  let fixture: ComponentFixture<Carddescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carddescription],
    }).compileComponents();

    fixture = TestBed.createComponent(Carddescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
