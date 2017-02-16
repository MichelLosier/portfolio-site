import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ComicsProjectGallery } from './comics/comics-project-gallery.component';

const ROUTES: Routes = [
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'comics',
		component: ComicsProjectGallery
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}