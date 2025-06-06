import { Component } from '@angular/core';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ResubaleNavbarComponent,RouterModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

}
