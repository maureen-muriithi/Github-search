import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhUserComponent } from './gh-user.component';

describe('GhUserComponent', () => {
  let component: GhUserComponent;
  let fixture: ComponentFixture<GhUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
