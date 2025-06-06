import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResubaleNavbarComponent } from './resubale-navbar.component';

describe('ResubaleNavbarComponent', () => {
  let component: ResubaleNavbarComponent;
  let fixture: ComponentFixture<ResubaleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResubaleNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResubaleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
