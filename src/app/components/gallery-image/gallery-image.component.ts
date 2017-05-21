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
	imageUrl: string;
	loading: boolean = true;
	@Input() artwork: Artwork
	
	constructor(){}

	ngOnInit(): void {
		this.imageUrl = this.createArtworkUrl(this.artwork);
	}
	createArtworkUrl (artwork: Artwork) {
		return `${this.baseUrl}${artwork.location}${artwork.normal}`;
	}
	tempLoad(event): void {
		this.imageUrl = ""
		this.loading = true;
	}

}