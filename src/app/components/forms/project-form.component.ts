import { Component, Input, Output } from '@angular/core';
import { Project } from '../../models/project';
import { Artwork } from '../../models/artwork';

import { ProjectGalleryService } from '../../services/project.service';
import { ArtworkService } from '../../services/artwork.service';
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

export class ProjectForm {
	projectForm: FormGroup;
	selectedProject: Project;
	newProject: boolean = true;

	private tags: string[] = [];
	private gallery: Artwork[] = [];
	private featuredImage: Artwork;

	constructor(
		private projectGalleryService: ProjectGalleryService,
		private artworkService: ArtworkService,
		private formBuilder: FormBuilder,
		private formService: ProjectArtworkFormService
		){
		this.createForm();
		this.formService.submittedArtwork$.subscribe( res => {
			this.gallery.push(res);
			this.formService.announceNewArtwork(false);
		});
		this.formService.selectedProject$.subscribe( res => {
			this.selectedProject = res;
			this.handleFormChanges();
			
		})
		this.formService.newProject$.subscribe( res => {
			this.newProject = res;
			this.handleFormChanges();
		})
		
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
		this.formService.announceNewArtwork(true);
	}
	
	addExistingArtwork(): void {
		this.formService.announceNewArtwork(false);
	}


	//form methods
	handleFormChanges(){
		if (this.selectedProject){
			this.setProject(this.selectedProject);
		} else if (this.newProject) {
			this.resetForm();
		}
	}

	setProject(project: Project): void {
		const form = this.projectForm;
		const formValues = {
			name: project.name,
			description: project.description,
			category: project.category,
			addTag: ''
		}
		form.setValue(formValues);
		this.tags = project.tags;
		this.gallery = project.gallery;
		this.featuredImage = project.featuredImage;
	}

	resetForm(){
		this.projectForm.reset();
		this.gallery = [];
		this.tags = [];
		this.featuredImage = undefined;
	}

	prepareSaveProject(): Project {
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

	updateArtworkWithProject(projectId: string, artworks: Artwork[]) {
		const artworkIds = [];
		artworks.map((artwork) => {
				artworkIds.push(artwork._id)
			})
		const update = {
			artworks: artworkIds, // array of artwork _id to query
			keys: { //keys to update
				$push: {projects: projectId} //push is mongodb operator
			}
		}
		this.artworkService.updateArtworks(update).subscribe(
			res => {
				console.log(`artworks updated with project id: ${res}`);
			}
		);
	}

	//submission
	onSubmit(): void {
		const project = this.prepareSaveProject();
		this.projectGalleryService.createProject(project).subscribe(
			res => {
				console.log(res);
				this.resetForm();
				this.formService.announceProjectSubmission(res);
				this.updateArtworkWithProject(res._id, project.gallery);
			}
		);
	}
}