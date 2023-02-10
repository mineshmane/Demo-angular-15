import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetalltrashnotesComponent } from './getalltrashnotes.component';

describe('GetalltrashnotesComponent', () => {
  let component: GetalltrashnotesComponent;
  let fixture: ComponentFixture<GetalltrashnotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetalltrashnotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetalltrashnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
