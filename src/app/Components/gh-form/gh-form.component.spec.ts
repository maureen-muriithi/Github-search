import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhFormComponent } from './gh-form.component';

describe('GhFormComponent', () => {
  let component: GhFormComponent;
  let fixture: ComponentFixture<GhFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
