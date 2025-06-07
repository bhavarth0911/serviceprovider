import { Component } from '@angular/core';
import { ResubaleNavbarComponent } from '../resubale-navbar/resubale-navbar.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ServiceDetailService } from '../services/service-detail.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ResubaleNavbarComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  constructor(private serviceDetail:ServiceDetailService,private router:Router){

  }

  formValue:any;
  contactDetails :FormGroup =new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    message:new FormControl('')
  });
    
  onSendMessage()
  {
    this.formValue=this.contactDetails.value;
    this.serviceDetail.sendEmail(this.formValue).subscribe({
      next:(response)=>{
        if(response?.attributes?.message){
          alert(response.attributes.message);
             
          this.contactDetails.reset();
        }
      },
      error:(err)=>{
        if(err.error?.errors?.length){
          alert(err.error.errors[0].message);
        }
      }
    });
  }

}
