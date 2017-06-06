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
	artworkForm: FormGroup;
	private projects: string[];

	//output emit submission id

	constructor(
		private artworkService: ArtworkService,
		private formBuilder: FormBuilder
	){
		this.createForm();
	}

	createForm(){
		this.artworkForm = this.formBuilder.group({
			projects: ['', Validators.required],
			location: ['', Validators.required],
			preview: ['', Validators.required],
			normal: ['', Validators.required],
			large: ['', Validators.required],
			caption: ['', Validators.required],
			description: ['', Validators.required],
			altText: ['', Validators.required]
		})
	}


	ngOnInit(): void {

	}

	private prepareSaveArtwork(): Artwork {
		const formModel = this.artworkForm.value;
		return formModel;
	}
	//need value transforming function to parse location? this data structure assumes same location root for all images associated
	onSubmit(): void {
		const artwork = this.prepareSaveArtwork();
		this.artworkService.createArtwork(artwork).subscribe(
			res => {
				console.log(res);
				this.artworkForm.reset();
			}
		);
	}

}