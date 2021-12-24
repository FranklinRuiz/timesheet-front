import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLaborComponent } from './eliminar-labor.component';

describe('EliminarLaborComponent', () => {
  let component: EliminarLaborComponent;
  let fixture: ComponentFixture<EliminarLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarLaborComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
