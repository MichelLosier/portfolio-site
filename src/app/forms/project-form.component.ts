import { Component, OnInit } from '@angular/core';
import { Project } from '../project-gallery/project';
import { ProjectGalleryService } from '../project-gallery/project-gallery.service';

import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'project-form',
	templateUrl: './project-form.html',
	styleUrls: ['./form.css']
})

export class ProjectForm implements OnInit {
	
	constructor(
		private projectGalleryService: ProjectGalleryService
		){}

	ngOnInit(): void {

	}
}