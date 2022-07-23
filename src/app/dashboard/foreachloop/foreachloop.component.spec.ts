import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeachloopComponent } from './foreachloop.component';

describe('ForeachloopComponent', () => {
  let component: ForeachloopComponent;
  let fixture: ComponentFixture<ForeachloopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeachloopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeachloopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
