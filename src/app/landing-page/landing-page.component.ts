import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceCategory, ServiceDetailService } from '../services/service-detail.service';
import { Router, RouterModule } from '@angular/router';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule,ResubaleNavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  categories: ServiceCategory[] = [];

  constructor(private serviceDetailService: ServiceDetailService,private router: Router) {

  }

  ngOnInit(): void {
    this.serviceDetailService.getServiceCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => {
        console.error('Error fetching service categories', err);
      }
    });
  }

    // Method to handle View Providers button click
  viewProviders(serviceDetailId: number): void {
    this.router.navigate(['/provider'], { 
      queryParams: { serviceDetailId: serviceDetailId } 
    });
  }
  // categories = [
  //   {
  //     title: 'Home Services',
  //     description: 'Cleaning, maintenance, and repair services for your home.',
  //     rating: 4.8,
  //     providers: 45
  //   },
  //   {
  //     title: 'Automotive Services',
  //     description: 'Car maintenance, repair, and detailing.',
  //     rating: 4.7,
  //     providers: 32
  //   },
  //   {
  //     title: 'Technical Repair',
  //     description: 'Electronics, appliances, and gadget repair.',
  //     rating: 4.9,
  //     providers: 28
  //   },
  //   {
  //     title: 'Beauty & Wellness',
  //     description: 'Spa services, wellness care, and beauty treatments.',
  //     rating: 4.6,
  //     providers: 56
  //   },{
  //     title: 'Technical Repair',
  //     description: 'Electronics, appliances, and gadget repair.',
  //     rating: 4.9,
  //     providers: 28
  //   },
  //   {
  //     title: 'Beauty & Wellness',
  //     description: 'Spa services, wellness care, and beauty treatments.',
  //     rating: 4.6,
  //     providers: 56
  //   },{
  //     title: 'Technical Repair',
  //     description: 'Electronics, appliances, and gadget repair.',
  //     rating: 4.9,
  //     providers: 28
  //   },
  //   {
  //     title: 'Beauty & Wellness',
  //     description: 'Spa services, wellness care, and beauty treatments.',
  //     rating: 4.6,
  //     providers: 56
  //   }
  // ];
 
  
  

   testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Home Cleaning',
      rating: 5,
      review: 'Amazing service! The cleaner was professional and thorough. Highly recommend!'
    },
    {
      name: 'Mike Chen',
      service: 'Car Repair',
      rating: 5,
      review: 'Fixed my car quickly and at a fair price. Great communication throughout.'
    },
    {
      name: 'Emily Davis',
      service: 'Tutoring',
      rating: 5,
      review: 'My daughter\'s math grades improved significantly. Excellent tutor!'
    }
  ];

   getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  showTooltip = false;
  
  onBookService() {
    console.log('Book a Service clicked');
    // Add your booking logic here
  }
  
  onLearnMore() {
    console.log('Learn More clicked');
    this.router.navigate(['/about']);
    // Add your learn more logic here
  }

 onBecomeProvider(): void {
    // Navigate to service provider registration form
   // console.log('Navigating...');
    this.router.navigate(['/become-provider']);
  }

  
}
