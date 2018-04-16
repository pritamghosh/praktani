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
import 'hammerjs';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventListComponent } from './home/event-list/event-list.component';

import { CarouselComponent } from './home/carousel/carousel.component';
import { NewsListComponent } from './home/news-list/news-list.component';
import { NewsComponent } from './home/news-list/news/news.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { ThumbnailComponent } from './home/gallery/thumbnail/thumbnail.component';
import { ImageService } from './services/image.service';
import { ViewerComponent } from './viewer/viewer.component';
import { FooterComponent } from './footer/footer.component';
import { EventModalComponent } from './modals/event-modal/event-modal.component';
import { ContactComponent } from './about/contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { ApplicationComponent } from './membership/application/application.component';
import { CallMembershipComponent } from './membership/call-membership/call-membership.component';
import { TitleComponent } from './shared/title/title.component';
import { ResposibilityAndBenefitComponent } from './membership/resposibility-and-benefit/resposibility-and-benefit.component';
import { EventCardComponent } from './home/event-list/event-card/event-card.component';
import { EventDetailComponent } from './shared/event-detail/event-detail.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { ThumbnailCardComponent } from './shared/thumbnail-card/thumbnail-card.component';

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
    //   children: [
    //     { path: '', component: RestaurantListComponent},
    //     { path: 'restaurant/:id', component: RestaurantDetailComponent}
    //   ]
  },
  { path: 'about/contact', component: ContactComponent },
  {path:'membership', component:MembershipComponent},
  { path: 'membership/rb', component: ResposibilityAndBenefitComponent },
  { path: 'membership/ma', component: ApplicationComponent },
  { path: 'membership/cm', component: CallMembershipComponent },
  { path: 'event/:id', component: EventDetailComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'home', redirectTo: '/' },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    EventListComponent,
    NewsListComponent,
    NewsComponent,
    CarouselComponent,
    NewsListComponent,
    GalleryComponent,
    ThumbnailComponent,
    ViewerComponent,
    FooterComponent,
    EventModalComponent,
    ContactComponent,
    MembershipComponent,
    ApplicationComponent,
    CallMembershipComponent,
    TitleComponent,
    ResposibilityAndBenefitComponent,
    EventCardComponent,
    EventDetailComponent,
    RegistrationComponent,
    ThumbnailCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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
    EventModalComponent
  ]
})
export class AppModule { }
