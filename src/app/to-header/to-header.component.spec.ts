import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToHeaderComponent } from './to-header.component';

describe('ToHeaderComponent', () => {
  let component: ToHeaderComponent;
  let fixture: ComponentFixture<ToHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
