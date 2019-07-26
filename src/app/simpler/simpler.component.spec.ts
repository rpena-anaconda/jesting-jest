import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplerComponent } from './simpler.component';

describe('SimplerComponent', () => {
  let component: SimplerComponent;
  let fixture: ComponentFixture<SimplerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
