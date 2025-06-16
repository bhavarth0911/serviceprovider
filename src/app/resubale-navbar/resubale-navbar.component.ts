import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resubale-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './resubale-navbar.component.html',
  styleUrl: './resubale-navbar.component.css'
})
export class ResubaleNavbarComponent {
  constructor(private router:Router){

  }
isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  // Close mobile menu when clicking outside or on window resize
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    if (event.target.innerWidth >= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const navbar = target.closest('nav');
    
    if (!navbar && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  onSignIn(){
    this.router.navigate(['/signup']);
  }
  onGetStarted(){
    this.router.navigate(['/provider'])
  }

}
