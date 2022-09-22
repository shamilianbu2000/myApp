import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent1Component } from './routing-component1.component';

describe('RoutingComponent1Component', () => {
  let component: RoutingComponent1Component;
  let fixture: ComponentFixture<RoutingComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponent1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
