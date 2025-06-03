import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderListComponent } from './providers-page/providers-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {path:'provider',component:ProviderListComponent}

];
