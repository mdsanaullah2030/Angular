import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfulfilComponent } from './viewfulfil.component';

describe('ViewfulfilComponent', () => {
  let component: ViewfulfilComponent;
  let fixture: ComponentFixture<ViewfulfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewfulfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfulfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
