import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReprinttableComponent } from './reprinttable.component';

describe('ReprinttableComponent', () => {
  let component: ReprinttableComponent;
  let fixture: ComponentFixture<ReprinttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReprinttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReprinttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
