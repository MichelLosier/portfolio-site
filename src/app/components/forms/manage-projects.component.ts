import { Component, OnInit } from '@angular/core';
import { ProjectForm } from  './project-form.component';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

@Component({
	moduleId: module.id,
	selector: 'manage-projects',
	templateUrl: './manage-projects.component.html'
})

export class ManageProjects implements OnInit{
	selectedProject: Project;
	selectedArtwork: Artwork;
	
	constructor(){

	}
	ngOnInit(): void {
	}
}
