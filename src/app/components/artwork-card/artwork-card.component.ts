import { Component, Input, OnInit } from '@angular/core';
import { Artwork, ArtworkCardModality } from '../../models/artwork';
import { GalleryImage } from '../gallery-image/gallery-image.component';
import { UrlConstructorService } from '../../services/urlConstructor.service';

@Component ({
	moduleId: module.id,
	selector: 'artwork-card',
	templateUrl: './artwork-card.component.html',
	styleUrls: ['./artwork-card.component.css']
})

export class ArtworkCard implements OnInit{

	@Input() selected: boolean
	@Input() artwork: Artwork
	@Input() modality: ArtworkCardModality = {
		displayImage: 'normal',
		showCaption: true,
		showDescription: true,
		clickForLarge: false,
		cardType: 'gallery'
	}

	imageUrl: string = "";

	constructor (
		private url$: UrlConstructorService
	){}
	
	ngOnInit(): void {
		this.imageUrl = this.artworkCardImage(this.modality.displayImage);
	}

	artworkCardImage(size){
		const _size = this.artwork[size] ? size : 'normal';
		return this.url$.createImageUrl(this.artwork.location, this.artwork[_size]);
	}


}