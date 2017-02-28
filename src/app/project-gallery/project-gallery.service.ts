import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Project } from './project';

@Injectable()

export class ProjectGalleryService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private projectsUrl = 'api/projects/';

	constructor(private http: Http) {}

	getAllProjects(): Observable<Project[]> {
		return this.http.get(this.projectsUrl)
				.map(response => response.json())
				.catch(this.handleError);
	}

	getAllProjectsCategory(category: string): Observable<Project[]> {
		const url = `${this.projectsUrl}category/${category}`;
		return this.http.get(url)
			.map(response => response.json());
	}

	getProjectByID(projectID: string): Observable <Project> {
		const url = `${this.projectsUrl}id/${projectID}`;
		return this.http.get(url)
			.map(response => response.json() as Project)
			.catch(this.handleError);
	}

	private handleError (error: Response | any) {
	   let errMsg: string;
	   if (error instanceof Response) {
	     const body = error.json() || '';
	     const err = body.error || JSON.stringify(body);
	     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	   } else {
	     errMsg = error.message ? error.message : error.toString();
	   }
	   console.error(errMsg);
	   return Observable.throw(errMsg);
	 }

}