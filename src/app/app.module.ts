import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './home/event/event.component';
import { NewsComponent } from './home/news/news.component';
import { CarouselComponent } from './home/carousel/carousel.component';

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
    //   children: [
    //     { path: '', component: RestaurantListComponent},
    //     { path: 'restaurant/:id', component: RestaurantDetailComponent}
    //   ]
  },
  { path: 'home', redirectTo: '' },
  { path: 'about', component: AboutComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventComponent,
    NewsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(ROUTES), 
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
