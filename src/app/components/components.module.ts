import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AbtWelcomeComponent } from './abt-welcome/abt-welcome.component';
import { AbtEducatorComponent } from './abt-educator/abt-educator.component';
import { AbtLeadingComponent } from './abt-leading/abt-leading.component';
import { AbtCollaborateComponent } from './abt-collaborate/abt-collaborate.component';
import { CntConnectComponent } from './cnt-connect/cnt-connect.component';
import { CntBookingsComponent } from './cnt-bookings/cnt-bookings.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HmeLandingComponent } from './hme-landing/hme-landing.component';
import { HmeMoreComponent } from './hme-more/hme-more.component';
import { HmeQouteComponent } from './hme-qoute/hme-qoute.component'
import { RouterModule } from '@angular/router'
import { NgwWowModule } from 'ngx-wow';
import { LoaderComponent } from './loader/loader.component';
import { NoticeDialogComponent } from './notice-dialog/notice-dialog.component';
//import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [AbtWelcomeComponent, AbtEducatorComponent, AbtLeadingComponent, AbtCollaborateComponent, CntConnectComponent, CntBookingsComponent, FooterComponent, HeaderComponent, HmeLandingComponent, HmeMoreComponent, HmeQouteComponent, LoaderComponent, NoticeDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    NgwWowModule,
    ReactiveFormsModule,//Add if needed 
    FormsModule,
    HttpClientModule
    //NgxUsefulSwiperModule
    //CarouselModule
  ],
  exports: [AbtWelcomeComponent, AbtEducatorComponent, AbtLeadingComponent, AbtCollaborateComponent, CntConnectComponent, CntBookingsComponent, FooterComponent, HeaderComponent, HmeLandingComponent, HmeMoreComponent, HmeQouteComponent, LoaderComponent, NoticeDialogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
