import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  adminCode: string | undefined;

  // Assuming you have your JSON data stored in a variable named 'jsonData'
  jsonData = {
    "admin": [
      {
        "code": "12345"
      }
    ]
  };

  constructor(private router: Router) { }

  loginuser(): void {
    // Extracting the admin code from the JSON data
    const correctAdminCode = this.jsonData.admin[0].code;

    if (this.adminCode === correctAdminCode) {
      // Navigate to the products-detail page if the admin code is correct
      this.router.navigate(['/product-details']);
    } else {
      // Handle incorrect admin code here, for example, show an error message
      alert('Incorrect admin code. Please try again.');
    }
  }

  // validateAdminCode(){
  //   this.authServie.login(this.adminCode);
  //   if(this.authServie.isLoggedIn){
  //     this.routeService.navigateToOrderListView();
  //   }
  }



  