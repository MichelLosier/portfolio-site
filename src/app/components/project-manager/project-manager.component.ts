import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';

import { GalleryImage } from '../gallery-image/gallery-image.component';

import { ProjectGalleryService } from '../../services/project.service';
import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';
import { UrlConstructorService } from '../../services/urlConstructor.service';
@Component({
	moduleId: module.id,
	selector: 'project-manager',
	templateUrl: './project-manager.component.html',
	styleUrls: ['./project-manager.component.css', '../forms/form.css']
})

export class ProjectManager {
	list: Project[]
	selectedProject: Project;
	selectedIndex: number;
	deleteRequest: boolean = false;

	constructor(
		private formService: ProjectArtworkFormService,
		private projectService: ProjectGalleryService,
		private url$: UrlConstructorService
	){
		this.initializeList();
	}

	projectSelect(project, index){
		if ( this.selectedProject === project) {
			this.selectedProject = undefined;
			this.selectedIndex = undefined;
			this.formService.announceSelectedProject(undefined);
		} else {
			this.selectedProject = project;
			this.selectedIndex = index;
			this.formService.announceSelectedProject(project);
		}
	}

	initializeList(){
		this.projectService.getAllProjects()
			.subscribe(projects => {
				this.list = projects;
			});
	}

	displayedList(){ //use sliding slice (returns new)

	}

	imageUrl(project){
		const img = project.featuredImage;
		return this.url$.createImageUrl(img.location, img.normal);
	}

	deleteSelectedProjectPrompt(project, index){
		this.deleteRequest = true;
	}

	deleteSelectedProject(bool){
		if(bool) {
			this.projectService.deleteProject(this.selectedProject._id).subscribe(res => {
				console.log(`${res} \n deleted.`);
				this.deleteRequest = false;
				this.initializeList();
			});
			//check artwork for references to project and then remove those references
			//server side?
		} else {
			this.deleteRequest = false;
		}
	}

}