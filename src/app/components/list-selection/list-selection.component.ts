import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { GalleryImage } from '../gallery-image/gallery-image.component';

import { ArtworkService } from '../../services/artwork.service';
import { ProjectGalleryService } from '../../services/project.service';
import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';

@Component({
	moduleId: module.id,
	selector: 'list-selection',
	template: './list-selection.component.html',
	styleUrls: ['./list-selection.component.css']
})

export class ListSelection {
	@Input() type: string
	@Input() list: any[]

	constructor(
		private formService: ProjectArtworkFormService,
		private projectService: ProjectGalleryService,
		private artworkService: ArtworkService
	){}
	

}