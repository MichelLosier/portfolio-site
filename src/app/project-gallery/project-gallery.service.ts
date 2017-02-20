import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Project } from './project';
import { Artwork } from './artwork';

@Injectable()

export class ProjectGalleryService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private projectsUrl = 'api/projects';

	constructor(private http: Http) {}

	getAllProjects(): Promise <Project[]> {
		return this.http.get(this.projectsUrl)
			.toPromise()
			.then(response => response.json().data as Project[])
			.catch(this.handleError);
	}

	getAllProjectsCategory(category: string): Promise <Project[]> {
		const url = `${this.projectsUrl}?category=${category}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Project[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}
