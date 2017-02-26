import { Component, Input, OnInit } from '@angular/core';
import { Artwork } from './artwork';
import { ArtworkService } from './artwork.service';

import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'gallery-image',
	templateUrl: './gallery-image.component.html',
	styleUrls: ['./gallery-image.component.css']
})

export class GalleryImage implements OnInit {
	artwork: Artwork
	baseUrl = "../assets/images/";
	imageUrl: string;
	loading: boolean = true;
	altText: string;
	@Input() id: string = null;

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
			this.altText = artwork.altText
		})
	}
	createArtworkUrl (artwork: Artwork) {
		return `${this.baseUrl}${artwork.location}${artwork.normal}`;
	}
	tempLoad(event): void {
		this.imageUrl = ""
		this.loading = true;
		this.altText ="..."
	}

}