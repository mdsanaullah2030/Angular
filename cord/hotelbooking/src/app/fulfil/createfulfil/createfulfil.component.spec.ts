import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefulfilComponent } from './createfulfil.component';

describe('CreatefulfilComponent', () => {
  let component: CreatefulfilComponent;
  let fixture: ComponentFixture<CreatefulfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatefulfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatefulfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
