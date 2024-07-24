import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFilmsComponent } from './short-films.component';

describe('ShortFilmsComponent', () => {
  let component: ShortFilmsComponent;
  let fixture: ComponentFixture<ShortFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
