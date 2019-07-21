import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousExempleComponent } from './sous-exemple.component';

describe('SousExempleComponent', () => {
  let component: SousExempleComponent;
  let fixture: ComponentFixture<SousExempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousExempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
