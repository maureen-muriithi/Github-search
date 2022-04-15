import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhFooterComponent } from './gh-footer.component';

describe('GhFooterComponent', () => {
  let component: GhFooterComponent;
  let fixture: ComponentFixture<GhFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
