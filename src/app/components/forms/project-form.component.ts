import { Component, OnInit, Input, Output } from '@angular/core';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { ProjectGalleryService } from '../../services/project.service';
import { ProjectArtworkFormService } from '../../services/project-artwork-form.service';
import { ArtworkForm } from './artwork-form.component';

import { ProjectCard } from '../project-card/project-card.component';

import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./form.css']
})

export class ProjectForm implements OnInit {
	newArtwork = false;
	projectForm: FormGroup;
	@Input() project: Project;
	@Input() addArtwork: Artwork;


	private tags: string[] = [];
	private gallery: Artwork[] = [];
	private featuredImage: string;

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private formBuilder: FormBuilder,
		private formService: ProjectArtworkFormService
		){
		this.createForm();
		this.formService.submittedArtwork$.subscribe( res => {
			this.gallery.push(res);
			this.newArtwork = false;
		});
	}

	ngOnInit(): void {
	}

	private createForm() {
		this.projectForm = this.formBuilder.group({
			name:['', Validators.required],
			description: ['', Validators.required],
			category: ['', Validators.required],
			addTag:''
		});
	}
	
	//tags
	addTag(): void{
		const tag = this.projectForm.get('addTag');
		this.tags.push(tag.value);
		tag.reset();
	}

	//gallery functions
	addNewArtwork(): void {
		this.newArtwork = true;
	}
	
	addExistingArtwork(): void {
		this.newArtwork = false;
	}


	private prepareSaveProject(): Project {
		const formModel = this.projectForm.value;
		const galleryReduce = this.gallery.map((artwork) => {
				return artwork._id;
			});
		const saveProject: Project = {
			name: formModel.name,
			description: formModel.description,
			category: formModel.category,
			featuredImage:  this.featuredImage || galleryReduce[0],
			tags: this.tags,
			gallery: galleryReduce
		}
		return saveProject;
	}

	//submission
	onSubmit(): void {
		const project = this.prepareSaveProject();
		this.projectGalleryService.createProject(project).subscribe(
			res => {
				console.log(res);
				this.projectForm.reset();
				this.formService.announceProjectSubmission(res);
			}
		);
	}
}