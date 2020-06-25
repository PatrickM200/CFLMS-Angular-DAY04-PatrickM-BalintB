import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


const routes: Routes = [
  {path: 'blog', component: BlogPageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutPageComponent},
  {path: '**', redirectTo: '/blog'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
