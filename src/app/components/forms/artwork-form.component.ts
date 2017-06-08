import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artwork } from '../../models/artwork';
import { Project } from '../../models/project';
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
	@Input() addProject: Project;
	private projects: string[];

	//output artwork
	artworkSubmission


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
		const saveArtwork: any = {


		} //object.assign?
		return formModel;
	}
	//need value transforming function to parse location? this data structure assumes same location root for all images associated
	onSubmit(): void {
		const artwork = this.prepareSaveArtwork();
		this.artworkService.createArtwork(artwork).subscribe(
			res => {
				console.log(res);
				this.artworkForm.reset();
				this.artworkSubmission.emit(res);
			}
		);
	}

}