import { Component, Input } from '@angular/core';
import { Artwork } from '../../models/artwork';

@Component({
	moduleId: module.id,
	selector: 'gallery-image',
	templateUrl: './gallery-image.component.html',
	styleUrls: ['./gallery-image.component.css']
})

export class GalleryImage {
	@Input() altText: string;
	@Input() imageUrl: string;
	loading: boolean = true;
	
	constructor(){
	}

	tempLoad(event): void {
		this.imageUrl = ""
		this.loading = true;
	}

}