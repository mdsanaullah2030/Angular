import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CretelocationComponent } from './cretelocation.component';

describe('CretelocationComponent', () => {
  let component: CretelocationComponent;
  let fixture: ComponentFixture<CretelocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CretelocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CretelocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
