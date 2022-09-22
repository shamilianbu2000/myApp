import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponent2Component } from './routing-component2.component';

describe('RoutingComponent2Component', () => {
  let component: RoutingComponent2Component;
  let fixture: ComponentFixture<RoutingComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
