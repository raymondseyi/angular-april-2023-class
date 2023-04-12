import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicpageComponent } from './dynamicpage.component';

describe('DynamicpageComponent', () => {
  let component: DynamicpageComponent;
  let fixture: ComponentFixture<DynamicpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
