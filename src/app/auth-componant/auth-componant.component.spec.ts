import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponantComponent } from './auth-componant.component';

describe('AuthComponantComponent', () => {
  let component: AuthComponantComponent;
  let fixture: ComponentFixture<AuthComponantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthComponantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthComponantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
