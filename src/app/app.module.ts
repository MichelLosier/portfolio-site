import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectGallery } from './components/project-gallery/project-gallery.component';
import { ProjectCard } from './components/project-card/project-card.component'
import { ArtworkCard } from './components/artwork-card/artwork-card.component'
import { ProjectDetail } from './components/project-detail/project-detail.component';
import { ProjectForm } from './components/forms/project-form.component';
import { ArtworkForm } from './components/forms/artwork-form.component';
import { ManageProjects } from './components/forms/manage-projects.component';

import { ProjectGalleryService } from './services/project.service'
import { ArtworkService } from './services/artwork.service';
import { ProjectArtworkFormService } from './services/project-artwork-form.service';

import { GalleryImage } from  './components/gallery-image/gallery-image.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectGallery,
    ProjectCard,
    ArtworkCard,
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
  providers: [ ProjectGalleryService, ArtworkService, ProjectArtworkFormService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
