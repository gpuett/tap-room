import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayKegComponent } from './display-keg.component';

describe('DisplayKegComponent', () => {
  let component: DisplayKegComponent;
  let fixture: ComponentFixture<DisplayKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
