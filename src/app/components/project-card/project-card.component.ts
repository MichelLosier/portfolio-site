import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { GalleryImage } from '../gallery-image/gallery-image.component'
import { UrlConstructorService } from '../../services/urlConstructor.service';

@Component({
	moduleId: module.id,
	selector: 'project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.css']
})

export class ProjectCard implements OnInit {
	@Input() selected: boolean //received state from controlling component
	@Input() project: Project
	imageUrl: string

	constructor (
		private url$: UrlConstructorService
	){}

	ngOnInit(): void {
		this.imageUrl = this.projectCardImage();
	}

	projectCardImage(): string {
		const size = this.project.featuredImage.preview ? 'preview' : 'normal';
		return this.url$.createImageUrl(this.project.featuredImage.location, this.project.featuredImage[size]);
	}
}