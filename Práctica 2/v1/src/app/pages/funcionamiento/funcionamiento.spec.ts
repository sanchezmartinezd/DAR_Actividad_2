import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funcionamiento } from './funcionamiento';

describe('Funcionamiento', () => {
  let component: Funcionamiento;
  let fixture: ComponentFixture<Funcionamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Funcionamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funcionamiento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
