import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandbikesComponent } from './standbikes.component';

describe('StandbikesComponent', () => {
  let component: StandbikesComponent;
  let fixture: ComponentFixture<StandbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
