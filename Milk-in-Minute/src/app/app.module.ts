import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatCardFooter, MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatChipListbox} from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CategoriesComponent } from './categories/categories.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import { SignupComponent } from './signup/signup.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { StartComponent } from './start/start.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    ProductsComponent,
    SearchComponent,
    HomePageComponent,
    FooterComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    SignupComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatFormFieldModule,
    MatBadgeModule,
    MatTooltipModule,
    MatCardFooter,
    MatChipListbox,
    MatChipsModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
