import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarLaborComponent } from './modificar-labor.component';

describe('ModificarLaborComponent', () => {
  let component: ModificarLaborComponent;
  let fixture: ComponentFixture<ModificarLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
