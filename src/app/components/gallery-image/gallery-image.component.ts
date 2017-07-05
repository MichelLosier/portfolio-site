import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from '../../models/artwork';

@Component({
	moduleId: module.id,
	selector: 'gallery-image',
	templateUrl: './gallery-image.component.html',
	styleUrls: ['./gallery-image.component.css']
})

export class GalleryImage implements OnInit {
	baseUrl = "../assets/images/";
	@Input() artwork: Artwork;
	imageUrl: string; 
	loading: boolean = true;
	
	constructor(){
	}

	ngOnInit(): void {
		this.imageUrl = this.createUrl(this.artwork);
	}
	private createUrl (artwork) { //should this live with the object?
		let fileName = artwork.preview ? artwork.preview : artwork.normal;
		return `${this.baseUrl}${artwork.location}${fileName}`;
	}
	tempLoad(event): void {
		this.imageUrl = ""
		this.loading = true;
	}

}