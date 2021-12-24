import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaCargoComponent } from './bandeja-cargo.component';

describe('BandejaCargoComponent', () => {
  let component: BandejaCargoComponent;
  let fixture: ComponentFixture<BandejaCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
