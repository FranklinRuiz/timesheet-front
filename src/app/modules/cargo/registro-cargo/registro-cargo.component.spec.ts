import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCargoComponent } from './registro-cargo.component';

describe('RegistroCargoComponent', () => {
  let component: RegistroCargoComponent;
  let fixture: ComponentFixture<RegistroCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
