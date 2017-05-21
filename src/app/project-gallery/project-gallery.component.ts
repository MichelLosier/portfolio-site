import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project';
import { ProjectCard }	from './project-card.component';

import { ProjectGalleryService } from './project-gallery.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Component({
	moduleId: module.id,
	selector: 'project-gallery',
	templateUrl: './project-gallery.component.html',
	styleUrls: ['./project-gallery.component.css']
})

export class ProjectGallery implements OnInit {
	projects: Project[];
	category: string;
	selectedProject: Project;

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private route: ActivatedRoute ) {
		}

	ngOnInit(): void {
		this.category = this.route.routeConfig.path;
		this.getProjects(this.category);
	}
	getProjects(category: string): void {
		this.projectGalleryService.getAllProjectsCategory(category)
			.subscribe(project => this.projects = project);
	}
	selectProject(project: Project): void {
		if (this.selectedProject === project){
			this.selectedProject = undefined;
		} else {
			this.selectedProject = project
		}
	}

}