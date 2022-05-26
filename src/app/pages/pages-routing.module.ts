import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { ContactComponent } from './contact/contact.component'
import { ProductionsComponent } from './productions/productions.component'
import { HomeComponent } from './home/home.component'
import { ProductionCatComponent } from './production-cat/production-cat.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'productions', component: ProductionsComponent },
  { path: 'productions/film', component: ProductionCatComponent },
  { path: 'productions/podcasts', component: ProductionCatComponent },
  { path: 'productions/television', component: ProductionCatComponent },
  { path: 'blog', component: ProductionCatComponent },
  { path: 'shakeXperience', component: ProductionCatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
