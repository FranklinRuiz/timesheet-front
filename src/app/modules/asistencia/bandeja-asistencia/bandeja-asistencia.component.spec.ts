import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaAsistenciaComponent } from './bandeja-asistencia.component';

describe('BandejaAsistenciaComponent', () => {
  let component: BandejaAsistenciaComponent;
  let fixture: ComponentFixture<BandejaAsistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaAsistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaAsistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
