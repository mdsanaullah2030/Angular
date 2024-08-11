import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanaullahComponent } from './sanaullah.component';

describe('SanaullahComponent', () => {
  let component: SanaullahComponent;
  let fixture: ComponentFixture<SanaullahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SanaullahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanaullahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

