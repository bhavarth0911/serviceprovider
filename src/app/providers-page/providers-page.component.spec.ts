import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderListComponent } from './providers-page.component';

describe('ProvidersPageComponent', () => {
  let component: ProviderListComponent;
  let fixture: ComponentFixture<ProviderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProviderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
