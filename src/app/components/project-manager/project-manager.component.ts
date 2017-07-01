import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { GalleryImage } from '../gallery-image/gallery-image.component';

import { ArtworkService } from '../../services/artwork.service';
import { ProjectGalleryService } from '../../services/project.service';
import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';

@Component({
	moduleId: module.id,
	selector: 'project-manager',
	templateUrl: './project-manager.component.html',
	styleUrls: ['./project-manager.component.css']
})

export class ProjectManager {
	list: Project[]
	selectedItem: {};

	constructor(
		private formService: ProjectArtworkFormService,
		private projectService: ProjectGalleryService,
		private artworkService: ArtworkService
	){
		this.initializeList();
	}

	initializeList(){
		this.projectService.getAllProjects()
			.subscribe(projects => {
				this.list = projects;
			});
	}

	displayedList(){ //use sliding slice (returns new)

	}
}