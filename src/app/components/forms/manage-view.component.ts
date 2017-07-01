import { Component } from '@angular/core';
import { ProjectForm } from  './project-form.component';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { ProjectManager } from '../project-manager/project-manager.component'

import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';


@Component({
	moduleId: module.id,
	selector: 'manage-view',
	templateUrl: './manage-view.component.html',
	styleUrls: ['./manage-view.component.css']
})

export class ManageView {
	addNewArtwork: boolean = false;
	
	constructor(
		private formService: ProjectArtworkFormService
	){
		this.formService.newArtwork$.subscribe( res => {
			this.addNewArtwork = res;
		});
	}

}
