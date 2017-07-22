import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertModule } from 'ngx-bootstrap';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-bootstrap';
import { CategoriesComponent } from './categories/categories.component';
import { StandbikesComponent } from './standbikes/standbikes.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
    StandbikesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
