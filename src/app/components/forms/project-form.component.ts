import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectGalleryService } from '../../services/project.service';
import { ArtworkForm } from './artwork-form.component';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./form.css']
})

export class ProjectForm implements OnInit {
	newArtwork = false;
	existingArtwork = false;
	projectForm: FormGroup;

	createForm() {
		this.projectForm = this.formBuilder.group({
			name:['', Validators.required],
			description: ['', Validators.required],
			category: ['', Validators.required],
			tags: ['']
		})
	}

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private formBuilder: FormBuilder
		){
		this.createForm();
	}

	ngOnInit(): void {

	}
	onSubmit(): void {
		this.projectGalleryService.createProject(this.projectForm.value).subscribe(
			res => {
				console.log(res);
				this.projectForm.reset();
			}
		);
	}
	addNewArtwork(): void {
		this.newArtwork = true;
	}
	addExistingArtwork(): void {
		this.existingArtwork = true;
	}
}