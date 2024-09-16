import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowModalComponent } from './slideshow-modal.component';

describe('SlideshowModalComponent', () => {
  let component: SlideshowModalComponent;
  let fixture: ComponentFixture<SlideshowModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideshowModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlideshowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
