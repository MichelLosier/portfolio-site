import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../models/artwork';
import { ArtworkService } from '../../services/artwork.service';
import { ProjectGallery	} from '../project-gallery/project-gallery.component';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'artwork-form',
	templateUrl: './artwork-form.component.html',
	styleUrls: ['./form.css']
})

export class ArtworkForm implements OnInit {
	artworkForm = new  FormGroup ({
		projects: new FormControl(''), //selection not text Project name list // if in context of project form
		location: new FormControl('', Validators.required),
		preview: new FormControl(''),
		normal: new FormControl('', Validators.required),
		large: new FormControl(''),
		caption: new FormControl('', Validators.required),
		description: new FormControl('', Validators.required),
		altText: new FormControl('', Validators.required)
	});

	constructor(
		private artworkService: ArtworkService,
		private formBuilder: FormBuilder
	){}

	ngOnInit(): void {

	}
	//need value transforming function to parse location? this data structure assumes same location root for all images associated
	onSubmit(): void {
		this.artworkService.createArtwork(this.artworkForm.value).subscribe(
			res => {
				console.log(res);
				this.artworkForm.reset();
			}
		);
	}

}