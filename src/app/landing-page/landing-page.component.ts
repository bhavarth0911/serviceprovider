import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  categories = [
    {
      title: 'Home Services',
      description: 'Cleaning, maintenance, and repair services for your home.',
      rating: 4.8,
      providers: 45
    },
    {
      title: 'Automotive Services',
      description: 'Car maintenance, repair, and detailing.',
      rating: 4.7,
      providers: 32
    },
    {
      title: 'Technical Repair',
      description: 'Electronics, appliances, and gadget repair.',
      rating: 4.9,
      providers: 28
    },
    {
      title: 'Beauty & Wellness',
      description: 'Spa services, wellness care, and beauty treatments.',
      rating: 4.6,
      providers: 56
    }
  ];
}
