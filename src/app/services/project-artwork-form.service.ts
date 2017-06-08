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

	private submittedArtwork = new Subject<Artwork>();

	//streams source.asObservable()
	selectedProject$ = this.selectedProject.asObservable();
	submittedProject$ = this.submittedProject.asObservable();

	submittedArtwork$ = this.submittedArtwork.asObservable();

	//event commands source.next()
	announceSelectedProject(project: Project){
		this.selectedProject.next(project);
	}

	announceProjectSubmission(project: Project){
		this.submittedProject.next(project);
	}

	announceArtworkSubmission(artwork: Artwork){
		this.submittedArtwork.next(artwork);
	}
}

