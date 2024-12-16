import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {path:'', component:StartComponent},
  {
    path:'products',component:ProductsComponent
  },
  {
    path:"home-page",component:HomePageComponent
  },
 {
   path:"start",component:StartComponent
 },
  {
    path:"cart",component:CartComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'product-details',component:ProductDetailsComponent
  },
  {
    path:'signup',component:SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
