import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectGallery } from './components/project-gallery/project-gallery.component';
import { ProjectDetail } from './components/project-detail/project-detail.component'
import { ManageProjects } from './components/forms/manage-projects.component';
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
	},
	{
		path: 'project/:id',
		component: ProjectDetail
	},
	{
		path: 'manage',
		component: ManageProjects
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}