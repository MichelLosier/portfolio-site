import { Artwork } from './artwork';
import { Observable } from 'rxjs/Observable';
export class Project {
	_id: number;
	name: string;
	position: number;
	dateAdded: string;
	description: string;
	featuredImage: string;
	category: string;
	tags: string[];
	gallery: string[];
}