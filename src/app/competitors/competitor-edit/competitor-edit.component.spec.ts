import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorEditComponent } from './competitor-edit.component';

describe('CompetitorEditComponent', () => {
  let component: CompetitorEditComponent;
  let fixture: ComponentFixture<CompetitorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetitorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
