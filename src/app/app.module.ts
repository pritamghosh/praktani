import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxImageGalleryModule } from 'ngx-image-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './home/event-list/event-list.component';

import { CarouselComponent } from './home/carousel/carousel.component';
import { NewsListComponent } from './home/news-list/news-list.component';
import { EventComponent } from './home/event-list/event/event.component';
import { NewsComponent } from './home/news-list/news/news.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ThumbnailComponent } from './home/gallery/thumbnail/thumbnail.component';
import { ImageService } from './services/image.service';
import { ViewerComponent } from './viewer/viewer.component';

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
    EventListComponent,
    EventComponent,
    NewsListComponent,
    NewsComponent,
    CarouselComponent,
    NewsListComponent,
    EventComponent,
    GalleryComponent,
    ThumbnailComponent,
    ViewerComponent
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
    CarouselModule.forRoot(),
    NgxImageGalleryModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
  entryComponents: [
    ViewerComponent
  ]
})
export class AppModule { }
