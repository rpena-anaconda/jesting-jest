import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponent } from './simple.component';

describe('SimpleComponent', () => {
  let component: SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have title by default', () => {
  //   expect(component.title).not.toBe(null);
  // });

  it('should return title', () => {
    expect(component.getTitle()).toBe('Supa Simple Component');
  });

  it('should set new title', () => {
    const updatedString = 'Changing Title';
    component.setTitle(updatedString);

    expect(component.title).toBe(updatedString);
  });
});
