import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallmodalComponent } from './smallmodal.component';

describe('SmallmodalComponent', () => {
  let component: SmallmodalComponent;
  let fixture: ComponentFixture<SmallmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
