import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';
import { ProjectGalleryService } from '../../services/project.service';
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


	private tags: string[] = []
	private gallery: string[] = []
	private featuredImage: string;

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private formBuilder: FormBuilder
		){
		this.createForm();
	}

	ngOnInit(): void {
	}

	private createForm() {
		this.projectForm = this.formBuilder.group({
			name:['', Validators.required],
			description: ['', Validators.required],
			category: ['', Validators.required],
			addTag:'',
			gallery: this.formBuilder.array([])
		})
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
		const saveProject: Project = {
			name: formModel.name,
			description: formModel.description,
			category: formModel.category,
			featuredImage:  this.featuredImage,
			tags: this.tags,
			gallery: this.gallery
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
			}
		);
	}
}