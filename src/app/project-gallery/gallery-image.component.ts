import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from './artwork';
import { ArtworkService } from './artwork.service';

import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'gallery-image',
	template: `<img [src]='imageUrl' />`,
	styles: [`img { width: 300px; height:auto;}`]
})

export class GalleryImage implements OnInit {
	artwork: Artwork
	baseUrl = "../assets/images/";
	imageUrl: string;
	@Input() id: string;

	constructor(
		private artworkService: ArtworkService,
		){}

	ngOnInit(): void {
		this.getImage(this.id);
	}
	getImage(id: string): void {
		console.log(id);
		this.artworkService.getArtworkByID(id)
		.subscribe( artwork => {
			console.log(artwork);
			this.artwork = artwork;
			this.imageUrl = this.createArtworkUrl(artwork);
		})
	}
	createArtworkUrl (artwork: Artwork) {
		return `${this.baseUrl}${artwork.location}${artwork.normal}`;
	}

}