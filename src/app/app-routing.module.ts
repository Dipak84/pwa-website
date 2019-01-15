import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MediaComponent } from './media/media.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'media',
    component: MediaComponent
  },
  {
    path: 'careers',
    component: CareersComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'users',
  //   loadChildren: 'app/users/users.module#UsersModule'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
