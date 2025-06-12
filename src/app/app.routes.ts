import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProviderListComponent } from './providers-page/providers-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AuthComponantComponent } from './auth-componant/auth-componant.component';
import { AllProvidersPageComponent } from './all-providers-page/all-providers-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {path:'provider',component:AllProvidersPageComponent},
    {path:'about',component:AboutPageComponent},
    { path: 'become-provider', component: AddProviderComponent },
    { path: 'contact', component: ContactPageComponent },
    {path:  'signup',component:AuthComponantComponent},

     { path: '**', redirectTo: '' }
    

];
