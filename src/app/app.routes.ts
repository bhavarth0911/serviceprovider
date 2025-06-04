import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderListComponent } from './providers-page/providers-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {path:'provider',component:ProviderListComponent},
    {path:'about',component:AboutPageComponent},
     { path: '**', redirectTo: '' }
    

];
