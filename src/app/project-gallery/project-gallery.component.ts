import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from './project';
import { ProjectGalleryService } from './project-gallery.service';
import { Observable } from 'rxjs/Observable';
@Component({
	moduleId: module.id,
	selector: 'project-gallery',
	templateUrl: './project-gallery.component.html',
	styleUrls: ['./project-gallery.component.css']
})

export class ProjectGallery implements OnInit {
	projects: Project[] = []
	category: string;
	imagesUrl = "../assets/images/"
	constructor(
		private projectGalleryService: ProjectGalleryService,
		private route: ActivatedRoute ) {

		
		}

	ngOnInit(): void {
		this.category = this.route.url[0];
		this.projectGalleryService.getAllProjectsCategory(this.category)
			.then(projects => this.projects = projects );
	}
}