import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedirectiveComponent } from './pipedirective.component';

describe('PipedirectiveComponent', () => {
  let component: PipedirectiveComponent;
  let fixture: ComponentFixture<PipedirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
