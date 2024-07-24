import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDomainComponent } from './public-domain.component';

describe('PublicDomainComponent', () => {
  let component: PublicDomainComponent;
  let fixture: ComponentFixture<PublicDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicDomainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
