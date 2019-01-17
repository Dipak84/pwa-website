import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MediaComponent } from './media/media.component';
import { CareersComponent } from './careers/careers.component';
import { ContactComponent } from './contact/contact.component'; 
import { CoreModule } from './shared/core/core.module';
//import { CarouselModule } from 'ngx-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    MediaComponent,
    CareersComponent,
    ContactComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    //CarouselModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
