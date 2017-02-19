import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectGallery } from './project-gallery/project-gallery.component';
import { ProjectGalleryService } from './project-gallery/project-gallery.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectGallery
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ProjectGalleryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
