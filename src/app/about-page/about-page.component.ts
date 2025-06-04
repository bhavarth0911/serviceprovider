import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterModule, CardModule, ButtonModule],
  templateUrl: 'about-page.component.html'
})
export class AboutPageComponent {}
