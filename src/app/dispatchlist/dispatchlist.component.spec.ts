import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchlistComponent } from './dispatchlist.component';

describe('DispatchlistComponent', () => {
  let component: DispatchlistComponent;
  let fixture: ComponentFixture<DispatchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
