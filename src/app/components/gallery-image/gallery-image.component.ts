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
	@Input() altText: string = ""
	@Input() path: string;
	@Input() fileName: string;
	@Input() imageUrl: string; // can be user defined or provisioned via createUrl
	loading: boolean = true;
	
	constructor(){}

	ngOnInit(): void {
		this.imageUrl = this.createUrl(this.path, this.fileName);
	}
	private createUrl (path: string, fileName: string) { //should this live with the object?
		return `${this.baseUrl}${path}${fileName}`;
	}
	tempLoad(event): void {
		this.imageUrl = ""
		this.loading = true;
	}

}