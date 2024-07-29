import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomupdateComponent } from './roomupdate.component';

describe('RoomupdateComponent', () => {
  let component: RoomupdateComponent;
  let fixture: ComponentFixture<RoomupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
