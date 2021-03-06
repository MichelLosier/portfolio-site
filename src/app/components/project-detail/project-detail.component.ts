import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';
import { ArtworkCard } from '../artwork-card/artwork-card.component';
import { ArtworkCardModality,
		 defaultArtworkCardConfig,
		 comicsArtworkCardConfig } from '../artwork-card/artwork-card.config';

import { ProjectGalleryService } from '../../services/project.service';

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
	includeCaptions = true;
	cardModality: ArtworkCardModality;
	
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
				this.project = project
				this.category = project.category;
				this.setCardConfig(this.category);
			});
		
	}

	setCardConfig(category: string){
		switch(category) {
			case 'illustration':
				this.cardModality = defaultArtworkCardConfig;
				break;
			case 'comics':
				this.cardModality = comicsArtworkCardConfig;
				break;
			default: 
				this.cardModality = defaultArtworkCardConfig;
		}
	}

	getProject(projectId: string){
		console.log(`getProject was passed: ${projectId}`);
		return this.projectService.getProjectByID(projectId);
			
	}

}