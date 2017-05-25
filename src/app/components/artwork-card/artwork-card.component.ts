import { Component, Input } from '@angular/core';
import { Artwork } from '../../models/artwork';
import { GalleryImage } from '../gallery-image/gallery-image.component';

@Component ({
	moduleId: module.id,
	selector: 'artwork-card',
	templateUrl: './artwork-card.component.html',
	styleUrls: ['./artwork-card.component.css']
})

export class ArtworkCard {
	@Input() selected: boolean
	@Input() artwork: Artwork
	constructor (){}
}