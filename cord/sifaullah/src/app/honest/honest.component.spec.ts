import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonestComponent } from './honest.component';

describe('HonestComponent', () => {
  let component: HonestComponent;
  let fixture: ComponentFixture<HonestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HonestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HonestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
