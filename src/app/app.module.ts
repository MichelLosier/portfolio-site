import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ProjectGallery } from './project-gallery/project-gallery.component';
import { ProjectDetail } from './project-gallery/project-detail.component';
import { GalleryImage } from './project-gallery/gallery-image.component';
import { ProjectForm } from './forms/project-form.component';
import { ArtworkForm } from './forms/artwork-form.component';
import { ManageProjects } from './forms/manage-projects.component';

import { ProjectGalleryService } from './project-gallery/project-gallery.service'
import { ArtworkService } from './project-gallery/artwork.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectGallery,
    ProjectDetail,
    GalleryImage,
    ProjectForm,
    ArtworkForm,
    ManageProjects
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ ProjectGalleryService, ArtworkService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
