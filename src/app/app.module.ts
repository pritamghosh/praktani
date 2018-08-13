import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ImageService } from './services/image.service';
import { ViewerComponent } from './viewer/viewer.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './about/contact/contact.component';
import { MembershipComponent } from './membership/membership.component';
import { ApplicationComponent } from './membership/application/application.component';
import { CallMembershipComponent } from './membership/call-membership/call-membership.component';
import { TitleComponent } from './shared/title/title.component';
import { ResposibilityAndBenefitComponent } from './membership/resposibility-and-benefit/resposibility-and-benefit.component';
import { EventDetailComponent } from './shared/event-detail/event-detail.component';
import { RegistrationComponent } from './shared/registration/registration.component';
import { ThumbnailCardComponent } from './shared/thumbnail-card/thumbnail-card.component';
import { PrivacyComponent } from './help/privacy/privacy.component';
import { FaqComponent } from './help/faq/faq.component';
import { RulesAndRegulationsComponent } from './help/rules-and-regulations/rules-and-regulations.component';
import { FeedbackComponent } from './help/feedback/feedback.component';
import { SitemapComponent } from './help/sitemap/sitemap.component';
import { GalleryResourceComponent } from './resources/gallery-resource/gallery-resource.component';
import { EventResourceComponent } from './resources/event-resource/event-resource.component';
import { EventCardComponent } from './shared/event-card/event-card.component';
import { DatePipe } from '@angular/common';
import { OverviewComponent } from './about/overview/overview.component';
import { ObjectiveComponent } from './about/objective/objective.component';
import { VissionAndMissonComponent } from './about/vission-and-misson/vission-and-misson.component';
import { ExecutiveCouncilComponent } from './about/executive-council/executive-council.component';
import { HttpModule } from '@angular/http';
import { FileService } from './services/file.service';
import { EventService } from './services/event.service';
import { TogglerService } from './services/toggler.service';

export const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
    //   children: [
    //     { path: '', component: RestaurantListComponent},
    //     { path: 'restaurant/:id', component: RestaurantDetailComponent}
    //   ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'about/overview', component: OverviewComponent },
  { path: 'about/vissionAndMisson', component: VissionAndMissonComponent },
  { path: 'about/executiveCouncil', component: ExecutiveCouncilComponent },
  { path: 'about/objective', component: ObjectiveComponent },
  { path: 'about/contact', component: ContactComponent },
  {path:  'membership', component:MembershipComponent},
  { path: 'membership/rb', component: ResposibilityAndBenefitComponent },
  { path: 'membership/ma', component: ApplicationComponent },
  { path: 'membership/cm', component: CallMembershipComponent },
  { path: 'gallery', component: GalleryResourceComponent},
  { path: 'events', component: EventResourceComponent},
  { path: 'event/:id', component: EventDetailComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'rules-regulations', component: RulesAndRegulationsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'privacy-policy', component: PrivacyComponent},
  { path: 'sitemap', component: SitemapComponent},
  { path: 'home', redirectTo: '/' },
  { path: 'registration', redirectTo: 'register' }
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
    ViewerComponent,
    FooterComponent,
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
    PrivacyComponent,
    FaqComponent,
    RulesAndRegulationsComponent,
    FeedbackComponent,
    SitemapComponent,
    GalleryResourceComponent,
    EventResourceComponent,
    OverviewComponent,
    ObjectiveComponent,
    VissionAndMissonComponent,
    ExecutiveCouncilComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    CarouselModule.forRoot(),
    NgxImageGalleryModule,
    BrowserAnimationsModule
  ],
  providers: [
    ImageService,
    FileService,
    EventService,
    TogglerService,
    DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
