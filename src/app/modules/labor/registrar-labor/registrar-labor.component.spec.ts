import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLaborComponent } from './registrar-labor.component';

describe('RegistrarLaborComponent', () => {
  let component: RegistrarLaborComponent;
  let fixture: ComponentFixture<RegistrarLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
