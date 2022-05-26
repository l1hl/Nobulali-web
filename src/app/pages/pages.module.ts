import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductionsComponent } from './productions/productions.component';
import { HomeComponent } from './home/home.component';
import { ProductionCatComponent } from './production-cat/production-cat.component';
import { ReadBlogComponent } from './read-blog/read-blog.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { YouTubePlayerModule } from '@angular/youtube-player'
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AboutComponent, ContactComponent, ProductionsComponent, HomeComponent, ProductionCatComponent, ReadBlogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    IvyCarouselModule,
    YouTubePlayerModule,
    NgxPaginationModule
    // CarouselModule
    //NgbModule
  ],
  exports: [AboutComponent, ContactComponent, ProductionsComponent, HomeComponent, ProductionCatComponent, ReadBlogComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
