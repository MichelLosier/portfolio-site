import { Component } from '@angular/core';
import { ProjectForm } from  './project-form.component';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';


@Component({
	moduleId: module.id,
	selector: 'manage-projects',
	templateUrl: './manage-projects.component.html',
	styleUrls: ['./manage-projects.component.css']
})

export class ManageProjects {
	addNewArtwork: boolean = false;
	
	constructor(
		private formService: ProjectArtworkFormService
	){
		this.formService.newArtwork$.subscribe( res => {
			this.addNewArtwork = res;
		});
	}

}
