import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PlaceholderComponent } from './placeholder.component';

describe('PlaceholderComponent', () => {
  let component: PlaceholderComponent;
  let fixture: ComponentFixture<PlaceholderComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceholderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders header if header attribute is set to true', () => {
    component.header = true;
    fixture.detectChanges();
    expect(de.query(By.css('.header'))).toBeTruthy();
  });

  it('does not render header if header attribute is set to false', () => {
    component.header = false;
    fixture.detectChanges();
    expect(de.query(By.css('.header'))).toBeFalsy();
  });

  // it('renders lines specified by input props', () => {
  //   component.lines = 15;
  //   fixture.detectChanges();
  //   expect(de.query(By.css('.paragraph')).nativeElement.innerHTML.length).toBe(
  //     15
  //   );
  // });
});
