import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectGallery } from './project-gallery/project-gallery.component';

const ROUTES: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'comics',
		component: ProjectGallery
	},
	{
		path:'illustration',
		component: ProjectGallery
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}