import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtComponentComponent } from './firt-component.component';

describe('FirtComponentComponent', () => {
  let component: FirtComponentComponent;
  let fixture: ComponentFixture<FirtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirtComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
