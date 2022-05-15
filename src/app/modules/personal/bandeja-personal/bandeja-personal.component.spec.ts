import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaPersonalComponent } from './bandeja-personal.component';

describe('BandejaPersonalComponent', () => {
  let component: BandejaPersonalComponent;
  let fixture: ComponentFixture<BandejaPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
