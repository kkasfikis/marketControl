import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopListComponent } from './eshop-list.component';

describe('EshopListComponent', () => {
  let component: EshopListComponent;
  let fixture: ComponentFixture<EshopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
