import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyyComponent } from './bodyy.component';

describe('BodyyComponent', () => {
  let component: BodyyComponent;
  let fixture: ComponentFixture<BodyyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
