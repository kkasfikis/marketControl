import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopEditComponent } from './eshop-edit.component';

describe('EshopEditComponent', () => {
  let component: EshopEditComponent;
  let fixture: ComponentFixture<EshopEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EshopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
