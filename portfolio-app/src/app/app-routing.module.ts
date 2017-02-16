import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';

const ROUTES: Routes = [
	{
		path: 'about',
		component: AboutComponent
	}
]

@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}