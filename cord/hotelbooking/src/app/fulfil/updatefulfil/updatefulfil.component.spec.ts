import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefulfilComponent } from './updatefulfil.component';

describe('UpdatefulfilComponent', () => {
  let component: UpdatefulfilComponent;
  let fixture: ComponentFixture<UpdatefulfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatefulfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefulfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
