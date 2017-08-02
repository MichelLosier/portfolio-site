import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Artwork } from '../models/artwork';

import { Subject } from 'rxjs/Subject';


@Injectable()

export class ProjectArtworkFormService {
	constructor(){}
	//sources
	private selectedProject = new Subject<Project>();
	private submittedProject = new Subject<Project>();

	private newArtwork = new Subject<boolean>();
	private selectedArtwork = new Subject<Artwork>();
	private submittedArtwork = new Subject<Artwork>();

	//streams source.asObservable()
	selectedProject$ = this.selectedProject.asObservable();
	submittedProject$ = this.submittedProject.asObservable();

	newArtwork$ = this.newArtwork.asObservable();
	selectedArtwork$ = this.selectedArtwork.asObservable();
	submittedArtwork$ = this.submittedArtwork.asObservable();


	//event commands source.next()
	announceSelectedProject(project: Project){
		this.selectedProject.next(project);
	}

	announceProjectSubmission(project: Project){
		this.submittedProject.next(project);
	}

	announceNewArtwork(bool: boolean){
		this.newArtwork.next(bool);
	}

	announceSelectedArtwork(artwork: Artwork){
		this.selectedArtwork.next(artwork);
	}

	announceArtworkSubmission(artwork: Artwork){
		this.submittedArtwork.next(artwork);
	}
}

