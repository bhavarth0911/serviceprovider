import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';
interface ServiceCategory {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
  tags: string[];
  providers: string;
}

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
  imports: [CommonModule, CardModule, ButtonModule, TagModule,RouterModule,ResubaleNavbarComponent],
  templateUrl: './all-services-page.component.html',
  styleUrl: './all-services-page.component.css'
})
export class AllServicesPageComponent {
serviceCategories: ServiceCategory[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites, web apps, and e-commerce solutions',
      icon: 'pi pi-code',
      iconColor: '#3B82F6',
      tags: ['React', 'WordPress', 'Shopify'],
      providers: '2,500+ providers'
    },
    {
      id: 2,
      title: 'Digital Marketing',
      description: 'SEO, social media, and advertising campaigns',
      icon: 'pi pi-megaphone',
      iconColor: '#10B981',
      tags: ['SEO', 'PPC', 'Social Media'],
      providers: '1,800+ providers'
    },
    {
      id: 3,
      title: 'Graphic Design',
      description: 'Logos, branding, and visual identity design',
      icon: 'pi pi-palette',
      iconColor: '#8B5CF6',
      tags: ['Logo', 'Branding', 'Print'],
      providers: '3,200+ providers'
    },
    {
      id: 4,
      title: 'Content Writing',
      description: 'Blog posts, copywriting, and content strategy',
      icon: 'pi pi-file-edit',
      iconColor: '#F97316',
      tags: ['Blogs', 'Copy', 'Scripts'],
      providers: '1,500+ providers'
    },
    {
      id: 5,
      title: 'Video Production',
      description: 'Video editing, animation, and production',
      icon: 'pi pi-video',
      iconColor: '#EF4444',
      tags: ['Editing', 'Animation', 'Live'],
      providers: '900+ providers'
    },
    {
      id: 6,
      title: 'Business Consulting',
      description: 'Strategy, operations, and growth consulting',
      icon: 'pi pi-chart-line',
      iconColor: '#6366F1',
      tags: ['Strategy', 'Operations', 'Growth'],
      providers: '750+ providers'
    },
    {
      id: 7,
      title: 'Mobile Development',
      description: 'iOS and Android app development',
      icon: 'pi pi-mobile',
      iconColor: '#059669',
      tags: ['iOS', 'Android', 'React Native'],
      providers: '1,200+ providers'
    },
    {
      id: 8,
      title: 'Photography',
      description: 'Product, portrait, and event photography',
      icon: 'pi pi-camera',
      iconColor: '#EC4899',
      tags: ['Product', 'Portrait', 'Events'],
      providers: '600+ providers'
    }
  ];

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
