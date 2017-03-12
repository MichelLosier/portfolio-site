import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from './project';
import { Artwork } from './artwork';
import { GalleryImage } from './gallery-image.component';

import { ProjectGalleryService } from './project-gallery.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

@Component({
	moduleId: module.id,
	selector: 'project-detail',
	templateUrl:'./project-detail.component.html',
	styleUrls: ['./project-detail.component.css']
})

export class ProjectDetail implements OnInit {
	project: Project;
	category: string; //category determines css class for laying out artwork: illustration is grid, comics more sequence

	constructor(
		private projectService: ProjectGalleryService,
		private route: ActivatedRoute
		){

	}
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.getProject(params['id']))
			.subscribe((project: Project )=> {
				console.log(`project: ${project}`);
				this.project = project});
		
	}
	getProject(projectId: string){
		console.log(`getProject was passed: ${projectId}`);
		return this.projectService.getProjectByID(projectId)
			
	}

}