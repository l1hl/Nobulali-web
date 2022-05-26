import { NgModule } from '@angular/core';
import { Routes, Router, Event, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { ProductionsComponent } from './pages/productions/productions.component'
import { LoginComponent } from './backend/login/login.component'
import { HomeComponent } from './pages/home/home.component'
import { ProductionCatComponent } from './pages/production-cat/production-cat.component'
import { ReadBlogComponent } from './pages/read-blog/read-blog.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'productions/:id', component: ProductionsComponent },
  { path: 'productions', component: ProductionsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'strartegy', component: ProductionCatComponent },
  { path: 'blog/read', component: ReadBlogComponent },
  { path: 'shakeXperience', component: ProductionCatComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true, scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
