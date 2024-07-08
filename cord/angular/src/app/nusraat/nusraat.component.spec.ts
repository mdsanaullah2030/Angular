import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NusraatComponent } from './nusraat.component';

describe('NusraatComponent', () => {
  let component: NusraatComponent;
  let fixture: ComponentFixture<NusraatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NusraatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NusraatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
