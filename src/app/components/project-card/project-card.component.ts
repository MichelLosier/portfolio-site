import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { GalleryImage } from '../gallery-image/gallery-image.component'

@Component({
	moduleId: module.id,
	selector: 'project-card',
	templateUrl: './project-card.component.html',
	styleUrls: ['./project-card.component.css']
})

export class ProjectCard {
	@Input() selected: boolean //received state from controlling component
	@Input() project: Project	
	constructor (){}

}