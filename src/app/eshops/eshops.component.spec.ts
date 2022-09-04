import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshopsComponent } from './eshops.component';

describe('EshopsComponent', () => {
  let component: EshopsComponent;
  let fixture: ComponentFixture<EshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
