import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';
import { ServiceCategory, ServiceDetailService } from '../services/service-detail.service';
import { RatingModule } from 'primeng/rating';

interface FeaturedService {
  id: number;
  title: string;
  provider: string;
  rating: number;
  reviews: number;
  tags: string[];
  duration: string;
  location: string;
  price: string;
  image: string;
  featured: boolean;
  rushAvailable?: boolean;
  expressAvailable?: boolean;
  deliveryTime?: string;
  status?: string;
}
@Component({
  selector: 'app-all-services-page',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule,RouterModule,ResubaleNavbarComponent,RatingModule],
  templateUrl: './all-services-page.component.html',
  styleUrl: './all-services-page.component.css'
})
export class AllServicesPageComponent implements OnInit{
serviceCategories: ServiceCategory[] = [];

constructor(
    private serviceDetailService: ServiceDetailService,
    private router: Router
  ) {}
iconMap: { [key: string]: { icon: string; color: string } } = {
  'Home Service': {
    icon: 'pi pi-home',
    color: '#3B82F6' // blue
  },
  'Automotive Services': {
    icon: 'pi pi-car',
    color: '#F97316' // orange
  },
  'Technical Repair': {
    icon: 'pi pi-cog',
    color: '#10B981' // green
  },
  'Beauty & Wellness': {
    icon: 'pi pi-heart',
    color: '#EC4899' // pink
  }
};
getIcon(title: string): string {
  return this.iconMap[title]?.icon || 'pi pi-briefcase'; // default
}

getColor(title: string): string {
  return this.iconMap[title]?.color || '#6B7280'; // default gray
}

   ngOnInit(): void {
    this.serviceDetailService.getServiceCategories().subscribe({
      next: (data) => {
        this.serviceCategories = data;
      },
      error: (err) => {
        console.error('Error fetching service categories', err);
      }
    });
  }
  featuredServices: FeaturedService[] = [
    {
      id: 1,
      title: 'Premium E-commerce Website Development',
      provider: 'TechCraft Solutions',
      rating: 4.9,
      reviews: 245,
      tags: ['React', 'Shopify', 'Mobile-First'],
      duration: '2-4 weeks',
      location: 'New York, USA',
      price: 'Starting at $2,500',
      image: '/api/placeholder/400/250',
      featured: true,
      expressAvailable: true
    },
    {
      id: 2,
      title: 'Complete Brand Identity & Logo Design',
      provider: 'Creative Studio Pro',
      rating: 4.8,
      reviews: 189,
      tags: ['Branding', 'Logo', 'Style Guide'],
      duration: '1-2 weeks',
      location: 'London, UK',
      price: 'Starting at $800',
      image: '/api/placeholder/400/250',
      featured: true,
      rushAvailable: true
    },
    {
      id: 3,
      title: 'SEO & Digital Marketing Campaign',
      provider: 'Growth Hackers Inc',
      rating: 4.9,
      reviews: 312,
      tags: ['SEO', 'PPC', 'Social Media'],
      duration: 'Ongoing',
      location: 'Remote',
      price: '$1,200/mo',
      image: '/api/placeholder/400/250',
      featured: true,
      deliveryTime: 'Results in 30 days',
      status: 'Ongoing'
    }
  ];
}
