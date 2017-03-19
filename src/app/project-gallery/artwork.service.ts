import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Artwork } from './artwork';

@Injectable()

export class ArtworkService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private options = new RequestOptions({headers: this.headers});
	private artworkUrl = 'api/artwork/';

	constructor(private http: Http) {}

	getArtworkByID(artworkID: string): Observable <Artwork> {
		const url = `${this.artworkUrl}id/${artworkID}`;
		console.log(url);
		return this.http.get(url)
			.map(response => response.json())
			.catch(this.handleError);
	}

	getArtworkByProjectID(projectID: string): Observable<Artwork[]> {
		const url = `${this.artworkUrl}/project/${projectID}`;
		return this.http.get(url)
			.map(response => response.json())
			.catch(this.handleError);
	}

	//POST
	createArtwork(artwork: Artwork): Observable <Response> {
		const url = `${this.artworkUrl}`
		return this.http.post(url, JSON.stringify(artwork), this.options)
			.map(response => response.json() as Response)
			.catch(this.handleError);
	}

	//PUT
	updateArtwork(artworkID: string, artwork: Artwork): Observable <Response> {
		const url = `${this.artworkUrl}id/${artworkID}`;
		return this.http.put(url, artwork, this.options)
			.map(response => response.json() as Response)
			.catch(this.handleError);
	}
	
	//DELETE
	deleteArtwork(artworkID: string): Observable <Response> {
		const url = `${this.artworkUrl}id/${artworkID}`;
		return this.http.delete(url)
			.map(response => response.json() as Response)
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
